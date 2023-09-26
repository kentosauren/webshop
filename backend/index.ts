import express, { Request, Response } from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the Stripe library
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST as string, {
  apiVersion: '2023-08-16',
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, worldss!');
});

// Create Payment Intent API
app.post('/api/create-payment-intent', async (req: Request, res: Response) => {
    console.log('Inside /api/create-payment-intent'); // <-- New log here
    try {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });
      res.status(200).send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(400).send({ error: 'An error occurred while creating a payment intent' });
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log('Server started...'); // <-- New log here
  });
