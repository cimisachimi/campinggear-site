const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Koneksi dengan mongodb
mongoose.connect(
  "mongodb+srv://chimi:chimi123@cluster0.pyaff9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// Penyimpanan gambar ecommerse
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// membuat tujuan upload untuk gambar
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Buat APi
app.get("/", (req, res) => {
  res.send("Express App is running");
});

// Schema membuat produk
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  categoty: {
    type: String,
    required: true,
  },
  new_price: {
    type: String,
    required: true,
  },
  old_price: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

//
app.post("/addproduct", async (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});
