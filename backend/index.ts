import express, { Request, Response } from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import nodemailer from "nodemailer";

dotenv.config();

// Initialize the Stripe library
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST as string, {
  apiVersion: '2023-08-16',
});

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Webshop',
  password: process.env.POSTGRES_PASSWORD as string,
  port: 5432,
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// let transporter = nodemailer.createTransport({
//   host: "smtpout.secureserver.net",
//   port: 465, // You can also use port 465
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "kentosauren@gmail.com", // your email account
//     pass: process.env.GODADDY_PASSWORD as string, // your email password
//   },
// });

// let transporter = nodemailer.createTransport({
//   host: "smtpout.secureserver.net",
//   port: 465, // You can also use port 465
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "kentosauren@gmail.com", // your email account
//     pass: process.env.GODADDY_PASSWORD as string, // your email password
//   },
// });

// let transporter = nodemailer.createTransport({
//   host: "smtpout.secureserver.net",
//   port: 465,
//   secure: true,
  
//   // secureConnection: false, // TLS requires secureConnection to be false
//   // tls: {
//   //     ciphers:'SSLv3'
//   // },
//   requireTLS:true,
//   debug: true,
//   auth: {
//     user: "kentosauren@gmail.com", // your email account
//          pass: process.env.GODADDY_PASSWORD as string, // your email password
//   }
// });




// verify connection configuration
// transporter.verify(function (error: any, success: boolean) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

// app.post('/api/send-email', async (req: Request, res: Response) => {
//   const { to, subject, text } = req.body; // Replace these with the actual fields you'll be using
  
//   const mailOptions = {
//     // from: 'post@smartpipe.no', // Replace with your email
//     //from: 'kentosauren@gmail.com', // Replace with your email
//      from: 'kent@corelogic.no', // Replace with your email
//     to: "test",
//     subject: "test",
//     text : "test",
//   };

//   transporter.sendMail(mailOptions, function (error: any, info: any) {
//     if (error) {
//       console.log(error);
//       res.status(500).send({ error: 'Something went wrong while sending email' });
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send({ message: 'Email sent successfully!' });
//     }
//   });
// });



// function to insert transaction data for payment processor
async function recordTransaction(
  userId: number, 
  paymentProcessor: string, 
  processorTransactionId: string, 
  amount: number, 
  currency: string, 
  status: string
): Promise<void> {
  try {
    await pool.query(`
      INSERT INTO transactions (user_id, payment_processor, processor_transaction_id, amount, currency, status)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [userId, paymentProcessor, processorTransactionId, amount, currency, status]);
  } catch (error) {
    console.error('Database query error:', error);
  }
}

// Create Payment Intent API
app.post('/api/create-payment-intent', async (req: Request, res: Response) => {
  console.log('Inside /api/create-payment-intent');
  try {
    const { amount, userId } = req.body;  // Assume userId is passed in the request body
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'nok',
    });

    // Check the status of the payment intent
    if (paymentIntent.status === 'requires_payment_method' || paymentIntent.status === 'requires_confirmation') {
      // Record the transaction in the database
      await recordTransaction(userId, 'Stripe', paymentIntent.id, amount, 'nok', 'succeeded');
      res.status(200).send({ clientSecret: paymentIntent.client_secret });
    } else {
      // Handle other payment intent statuses as needed
      res.status(400).send({ error: `Unexpected payment intent status: ${paymentIntent.status}` });
    }
  } catch (error) {
    res.status(400).send({ error: 'An error occurred while creating a payment intent' });
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, worldss!');
});

app.get("/api/product/:productId", async (req, res) => {
  const { productId } = req.params;
  console.log("Received request to /api/product/:productId", productId);
  try {
    const queryResult = await pool.query(`SELECT productname, price, description, image_urls FROM products WHERE productId = $1`, [productId]);
    const productData = queryResult.rows[0];
    
    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }
  console.log("2");
    
    res.json(productData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// Confirm Payment API
app.post('/api/confirm-payment', async (req: Request, res: Response) => {
  // Your confirmation logic here
});

// Retrieve Payment History API
app.get('/api/payment-history', async (req: Request, res: Response) => {
  // Your logic to retrieve payment history
});

// Refund Payment API
app.post('/api/refund-payment', async (req: Request, res: Response) => {
  // Your refund logic here
});


app.post('/api/save-delivery-info', async (req: Request, res: Response) => {
  console.log("Received request to /api/save-delivery-info");
  const deliveryInfo = req.body;

  try {
    const { rows } = await pool.query('SELECT * FROM Users WHERE email = $1', [deliveryInfo.email]);

    if (rows.length === 0) {
      // Insert new record
      await pool.query(
        'INSERT INTO Users(email, firstName, lastName, phone, street, zip, city) VALUES($1, $2, $3, $4, $5, $6, $7)',
        [deliveryInfo.email, deliveryInfo.firstName, deliveryInfo.lastName, deliveryInfo.phone, deliveryInfo.street, deliveryInfo.zip , deliveryInfo.city]
      );
    } else {
      // Update existing record
      await pool.query(
        'UPDATE Users SET firstName = $2, lastName = $3, phone = $4, street = $5, zip = $6, city = $7 WHERE email = $1',
        [deliveryInfo.email, deliveryInfo.firstName, deliveryInfo.lastName, deliveryInfo.phone, deliveryInfo.street, deliveryInfo.zip, deliveryInfo.city]
      );
    }

    res.status(200).send({ message: 'Delivery info saved successfully!' });
  } catch (error) {
    console.error("Database query error:", error);
       res.status(500).send({ error: 'Database query error.' });
    res.status(500).send({ error: 'An error occurred while saving the delivery info.' });
  }
});

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log('Server started...'); // <-- New log here
  });
