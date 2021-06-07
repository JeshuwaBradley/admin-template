const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

let topSales = [
  {
    name: "iPhone 11 Pro Max (256 GB)",
    price: 1099,
    sales: 392,
  },
  {
    name: "iPhone 11 Pro Max (256 GB)",
    price: 1099,
    sales: 392,
  },
  {
    name: "iPhone 11 Pro Max (256 GB)",
    price: 1099,
    sales: 392,
  },
  {
    name: "iPhone 11 Pro Max (256 GB)",
    price: 1099,
    sales: 392,
  },
]

let latestSales = [
  {
    no: 1,
    name: "MacBook Pro 15 inch",
    time: 5,
    status: "success",
    amount: 1699
  },
  {
    no: 1,
    name: "MacBook Pro 15 inch",
    time: 5,
    status: "pending",
    amount: 1699
  },
  {
    no: 1,
    name: "MacBook Pro 15 inch",
    time: 5,
    status: "cancelled",
    amount: 1699
  },
  {
    no: 1,
    name: "MacBook Pro 15 inch",
    time: 5,
    status: "success",
    amount: 1699
  },
  {
    no: 1,
    name: "MacBook Pro 15 inch",
    time: 5,
    status: "success",
    amount: 1699
  },
]

app.get("/", (req, res) => {
  res.render("dashboard", {
    topSales: topSales,
    latestSales: latestSales,
  })
});

app.listen(3000, () => {
  console.log("The server started from port 3000");
});
