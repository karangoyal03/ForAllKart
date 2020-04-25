const Sequelize = require("sequelize");

const db = new Sequelize("forallkartdb", "forallowner", "ownerpass", {
  dialect: "mysql",
  host: "localhost",
  pool: {
    min: 0,
    max: 5,
  },
});

const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },

  phonenumber: {
    type: Sequelize.NUMBER,
    allowNull: null,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

const Mobile = db.define("mobiles", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    defaultValue: 0.0,
    allowNull: false,
  },
  imageurl:Sequelize.STRING,
  ram: Sequelize.INTEGER,
  primarycamera: Sequelize.STRING,
  secondarycamera: Sequelize.STRING,
  storage: Sequelize.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

const Cart = db.define("carts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  productname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price:{
    type: Sequelize.FLOAT,
    defaultValue: 0.0,
    allowNull: false,
  },
  imageurl=Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

const Query = db.define("queries", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  problem: {
    type: Sequelize.STRING,
  },
  phonenumber: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

db.sync()
  .then(() => {
    console.log("database was synced successfully");
  })
  .catch((err) => {
    console.log("error in creating database" + err);
  });


  exports = module.exports={
      User,Mobile,Cart,Query
  }
