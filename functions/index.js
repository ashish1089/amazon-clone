const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OVr9USEE6F3evz8rulQH0w9Nr3lKOf2yBG9Am103qJTJEwF9XBr2IvBznO6p0i4TGEiJKZhbzXB3WjdOcySreoR00oqadLg6F"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved >>> ", total);

  try {
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      description: 'amazon-clone project' ,
      shipping: {
        name: 'Dummy',
        address: {
          line1: '123 ReactLane',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
      },
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error);
    res.status(500).send("Internal Server Error");
  }

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = onRequest(app);
