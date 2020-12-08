var express = require('express');
var router = express.Router();
var AdminModel = require("../models/admin");

/* GET users listing. */
router.get('/', function(req, res, next) {
  AdminModel.find()
    .then(admins => res.json(admins))
    .catch(err => res.status(400).json('Error: ' + err));
  
});


router.post("/", function(req, res, next) {
  let newAdmin = new AdminModel();
  newAdmin.name = req.body.name;
  newAdmin.complete = req.body.complete;
  newAdmin.save().then(admin => res.json(admin));
  });
   




router.delete("/:id", function(req, res, next) {
  AdminModel.findByIdAndRemove(req.params.id, (err, admin) => {
    if (err) return res.status(400).send(err);
    res.send(admin);
  });
});

router.put("/:id", function(req, res, next) {
  AdminModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      complete: false
    },
    { new: true },
    (err, admin) => {
      if (err) return res.status(400).send(err);
      res.send(admin);
    }
  );
});


module.exports = router;