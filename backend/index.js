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

// Penyimpanan gambar Engine dengan Multer
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
  category: {
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

//Tambah Product baru
app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product = products[products.length - 1];
      id = last_product.id + 1;
    } else {
      id = 1;
    }

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    console.log(product);

    await product.save();
    console.log("Saved");

    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ success: false, error: "Failed to save product" });
  }
});

// Baca Semua Product

app.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({
      success: true,
      products: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
});

// Delete product endpoint
app.post("/removeproduct", async (req, res) => {
  try {
    const result = await Product.findOneAndDelete({ id: req.body.id });
    if (result) {
      console.log("Product deleted successfully");
      res.json({
        success: true,
        message: "Product deleted successfully",
      });
    } else {
      console.log("Product not found");
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});
