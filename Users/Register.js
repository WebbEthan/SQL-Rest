Hit()
{
    console.log("hit");
}
const express = require("express");

const Register = express();
Register.post("/contact", function(req, res){
    res.render("contact", {qs: req.query})
});