const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const addToCart = async (req, res) => {
  try {
    const { userId, Productid, quantity } = req.body;

    if (!userId || !productId || quantity <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid data provided!" });
    }

    const product = await Product.findById(productid);

    if (!product) {
      return res
        .status(400)
        .json({ success: false, message: "Product not found!" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const findCurrentProductIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (findCurrentProductIndex === -1) {
      cart.items.push({ productId, quantity });
    } else {
      cart.items[findCurrentProductIndex].quantity += quantity;
    }

    await cart.save();
    res.status(200).json({ succes: true, data: Product.create });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

const fetchCartItems = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

const updateCartItemQuantity = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

const deleteCartItem = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

module.exports = {
  addToCart,
  fetchCartItems,
  updateCartItemQuantity,
  deleteCartItem,
};
