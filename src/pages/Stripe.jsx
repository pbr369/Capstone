// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
const stripe = require("stripe")("sk_test_...");
const express = require("express");
const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  "whsec_40c7c8fa5f94d7be3348e09a3f11a2089d441f3787c325ca573af5f8ed191de5";

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        const checkoutSessionAsyncPaymentFailed = event.data.object;
        // Then define and call a function to handle the event checkout.session.async_payment_failed
        break;
      case "checkout.session.async_payment_succeeded":
        const checkoutSessionAsyncPaymentSucceeded = event.data.object;
        // Then define and call a function to handle the event checkout.session.async_payment_succeeded
        break;
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        // Then define and call a function to handle the event checkout.session.completed
        break;
      case "checkout.session.expired":
        const checkoutSessionExpired = event.data.object;
        // Then define and call a function to handle the event checkout.session.expired
        break;
      case "payment_method.attached":
        const paymentMethodAttached = event.data.object;
        // Then define and call a function to handle the event payment_method.attached
        break;
      case "payment_method.automatically_updated":
        const paymentMethodAutomaticallyUpdated = event.data.object;
        // Then define and call a function to handle the event payment_method.automatically_updated
        break;
      case "payment_method.detached":
        const paymentMethodDetached = event.data.object;
        // Then define and call a function to handle the event payment_method.detached
        break;
      case "payment_method.updated":
        const paymentMethodUpdated = event.data.object;
        // Then define and call a function to handle the event payment_method.updated
        break;
      case "product.created":
        const productCreated = event.data.object;
        // Then define and call a function to handle the event product.created
        break;
      case "product.deleted":
        const productDeleted = event.data.object;
        // Then define and call a function to handle the event product.deleted
        break;
      case "product.updated":
        const productUpdated = event.data.object;
        // Then define and call a function to handle the event product.updated
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

app.listen(4242, () => console.log("Running on port 4242"));
