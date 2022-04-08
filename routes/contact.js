const express = require("express");
const contactRoutes = express.Router();
contactRoutes.post("/", async (req, res) => {
  try {
    const newContact = new contact(req, res);
    await newContact.save();
    res.status(200).send({ msg: "contact added", newContact });
  } catch (error) {
    res.status(500).send("could not add contact");
  }
});
module.exports = contactRoutes;
