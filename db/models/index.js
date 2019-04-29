const Product = require("./Product");
const Category = require("./Category");
const Cart = require("./Cart");
const LineItem = require("./LineItem");
const User = require("./User");

Product.belongsTo(Category);
Category.hasMany(Product);

LineItem.belongsTo(Product);
Product.hasMany(LineItem);

LineItem.belongsTo(Cart);
Cart.hasMany(LineItem);

Cart.belongsTo(User);
User.hasOne(Cart);

module.exports = { Product, Category, Cart, LineItem, User };
