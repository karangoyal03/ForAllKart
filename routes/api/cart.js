const Cart = require("../../db").Cart;
const route = require("express").Router();

route.get("/delete", (req, res) => {
  Cart.destroy({
    where: {
      id: req.query.id,
    },
  })
    .then(() => {
      res.send("item successfully removed from cart");
    })
    .catch((err) => {
      console.log(err);
      res.send("error in deleting item from cart");
    });
});

route.get("/", (req, res) => {
  Cart.findAll()
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: "could not get carts items",
      });
    });
});

route.post("/", (req, res) => {
  Cart.create({
    productname: req.body.productname,
    manufacturer: req.body.manufacturer,
    price: parseFloat(req.body.price),
    imageurl: req.body.imageurl,
  })
    .then((item) => {
      res.status(201).send(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(501).send({
        error: "could not add elements to cart",
      });
    });
});

exports = module.exports = route;
