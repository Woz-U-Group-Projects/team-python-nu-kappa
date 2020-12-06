var express = require('express');
var router = express.Router();
<<<<<<< HEAD:server-express-mongodb/routes/menu.js

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
=======
var MenuModel = require("../models/menu");

router.get("/", function(req, res, next) {
  MenuModel.find().then(menus => res.json(menus));
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
      complete: false
    },
    { new: true },
    (err, menu) => {
      if (err) return res.status(400).send(err);
      res.send(menu);
    }
  );
});

module.exports = router;
>>>>>>> Front-End:server-express-mongodb/routes/menus.js
