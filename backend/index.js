const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose
  .connect(
    "mongodb+srv://chimi:chimi123@cluster0.pyaff9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Serve static images
app.use("/images", express.static("upload/images"));

// Endpoint to handle multiple file uploads
app.post("/upload", upload.array("product", 10), (req, res) => {
  // Adjust the limit (10) as needed
  const imageUrls = req.files.map(
    (file) => `http://localhost:${port}/images/${file.filename}`
  );
  res.json({
    success: 1,
    image_urls: imageUrls,
  });
});

// Default route
app.get("/", (req, res) => {
  res.send("Express App is running");
});

// Product schema
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
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

// Add new product
app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id: id,
      name: req.body.name,
      images: req.body.images, // Array of image URLs
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();

    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ success: false, error: "Failed to save product" });
  }
});

// Get all products
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
      res.json({
        success: true,
        message: "Product deleted successfully",
      });
    } else {
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

// User schema
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// User signup endpoint
app.post("/signup", async (req, res) => {
  try {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
      return res
        .status(400)
        .json({ success: false, errors: "Email sudah digunakan" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new User({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom");
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// User login endpoint
app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const passMatch = req.body.password === user.password;
    if (passMatch) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Adress" });
  }
});

// Mengambil data newcollection dari database
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("Newcollection fecthed");
  res.send(newcollection);
});

// Mengambil data popularProduct dari database
app.get("/popularproducts", async (req, res) => {
  let products = await Product.find({ category: "Tenda" });
  let popularproducts = products.slice(0, 4);

  res.send(popularproducts);
});

//mendapat user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please autheticate using valid login" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "please autheticate using a valid token" });
    }
  }
}; // Add product to cart
app.post("/addtocart", fetchUser, async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (userData) {
      const { itemId } = req.body;
      const quantity = userData.cartData[itemId] || 0;
      userData.cartData[itemId] = quantity + 1;
      await userData.save();
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: "Failed to add to cart" });
  }
});

// Remove product from cart
app.post("/removefromcart", fetchUser, async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (userData) {
      const { itemId } = req.body;
      if (userData.cartData[itemId] > 0) {
        userData.cartData[itemId] -= 1;
        await userData.save();
        res.json({ success: true });
      } else {
        res.json({ success: false, message: "Item quantity is already 0" });
      }
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error removing from cart:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to remove from cart" });
  }
});

// Get cart
app.post("/getcart", fetchUser, async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (userData) {
      res.json({ success: true, cartData: userData.cartData });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ success: false, message: "Failed to fetch cart" });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});
