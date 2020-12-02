var express = require("express");
var router = express.Router();

var Model_Menu = require("../models/menu");

router.get("/", function(req, res, next) {
  MenuModel.find().then(menu => res.json(menu));
});

router.post("/", function(req, res, next) {
  let newMenu = new MenuModel();
  newMenu.name = req.body.name;
  newMenu.complete = req.body.complete;
  newMenu.save().then(menu => res.json(menu));
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
      name: req.body.name,
      complete: req.body.complete
    },
    { new: true },
    (err, menu) => {
      if (err) return res.status(400).send(err);
      res.send(menu);
    }
  );
});

module.exports = router;
