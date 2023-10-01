
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBhvdUIh5XCSUPTtwVVWXy7MpUsOMzQrus",
    authDomain: "webshop-36bc3.firebaseapp.com",
    projectId: "webshop-36bc3",
    storageBucket: "webshop-36bc3.appspot.com",
    messagingSenderId: "878654760000",
    appId: "1:878654760000:web:75a80c40902ebaf2b76ba5",
    measurementId: "G-TCNDES1XY9"
};

const app = initializeApp(config);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const addSampleProduct = async () => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      "_id": "sampleID1",
      "webshopID": "webshop1",
      "itemname": "Sample Item",
      "price": 29.99,
      "mainimage": "./src/assets/img/mainimage.jpg",
      "extraImages": ["image1.jpg", "image2.jpg"],
      "payments": [
        {
          "provider": "Stripe",
          "details": "stripeDetailsObject"
        }
      ],
      "description": "Item description",
      "stock": 100,
      "category": "Electronics",
      "SKU": "ABC123",
      "discounts": [
        {
          "code": "SUMMER21",
          "amount": 5
        }
      ]
    });
    console.log('Document successfully written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

// Call the function to add the sample product
addSampleProduct();
