var express = require("express");
var router = express.Router();
var MenuModel = require("../models/menu");

router.get("/", function(req, res, next) {
  MenuModel.find()
  .then(menus => res.json(menus))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/", function(req, res, next) {
  let newMenu = new MenuModel();
  newMenu.id = req.body.id;
  newMenu.entree = req.body.entree;
  newMenu.details = req.body.details;
  newMenu.description = req.body.description;
  newMenu.price = Number(req.body.price);
  
  newMenu.save()
  .then(menu => res.json(menu));
});






router.delete("/:id", function(req, res, next) {
  MenuModel.findByIdAndRemove(req.params.id, (err, menu) => {
    if (err) return res.status(400).send(err);
    res.send(menu);
  });
});

router.put("/:id", function(req, res, next) {
  MenuModel.findByIdAndUpdate(
    req.params.id,
    {
      id:req.body.id,
      entree:req.body.entree,
      details: req.body.details,
      description:req.body.description,
      price:Number(req.body.price)
      
    },
    { new: true },
    (err, menu) => {
      if (err) return res.status(400).send(err);
      res.send(menu);
    }
  );
});

module.exports = router;
