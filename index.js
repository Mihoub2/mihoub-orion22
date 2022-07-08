require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//connexion à la bdd
mongoose.connect(
  "mongodb+srv://Mihoub-orion2022:Tn6Gsv7Fp2twXt9b@cluster0.tyaz8.mongodb.net/test"
);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome on Vinted Api ! 🎉");
});
//import des routes users et offers
const usersRoutes = require("./routes/users");
app.use(usersRoutes);
const offersRoutes = require("./routes/offers");
app.use(offersRoutes);

app.all("*", (req, res) => {
  res.status(400).json("Route introuvable");
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
