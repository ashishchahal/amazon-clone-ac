const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HU9viJJFRPFWCJ2NTaBFXJwuC2XXTZ8oOkYabd3skjRC66MC28iiVFkOgTWt5iwlG9HQSuXG6bkEG8schLdJY9200xU3iiv6V"
);

//-------**** API ****---------

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/babe", (request, response) =>
  response.status(200).send("hello babe")
);

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-ac-271d9/us-central1/api
