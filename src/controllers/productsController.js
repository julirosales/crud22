const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("products", { products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    let idDetail = req.params.id;
    const producto = products.find((p) => idDetail == p.id);
    res.render("detail", { producto });
  },

  /* // Create - Form to create
  create: (req, res) => {
    // Do the magic
  },

  // Create -  Method to store
  store: (req, res) => {
    // Do the magic
  }, */

  // Update - Form to edit
  edit: (req, res) => {
    let idEdit = req.params.id;
    const productoEdit = products.find((p) => idEdit == p.id);
    res.render("product-edit-form", { productoEdit });
  },

  /* 
  // Update - Method to update
  update: (req, res) => {
    // Do the magic
  }, */

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    /*  let idEdit = req.params.id;
    const productoEliminado = products.find((p) => idEdit == p.id); */
    res.redirect("/");
  },
};

module.exports = controller;
