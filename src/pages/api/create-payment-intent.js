// This is your test secret API key.
const stripe = require("stripe")("sk_test_51MpB9EC4vUmChxeG7z9oFhpVPwLcLm8nnEKBbJFmEdwwU5qsbsU7vPaT0hUaRAIspdih9Vq7mlEuhzfi7M3DB2G100Q62kWDPT");

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default async function handler(req, res) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    customer: "cus_OikG6U8ukSwqUN",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });

};