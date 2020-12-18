var express = require("express");

const menu = require("../models/menu");

var router = express.Router();
var MenuModel = require("../models/menu");

router.get("/", function(req, res, next) {
  MenuModel.find()
  .then(menus => res.json(menus))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/", function(req, res,) {
  let newMenu = new MenuModel(req.body);
  newMenu.save()
  .then(menus => {res.json({"menu":"Menu added"});
})
  .catch(err => {
    res.status(400).send("Add failed");
  });
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
