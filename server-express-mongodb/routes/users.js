var express = require('express');
var router = express.Router();
var UserModel = require("../models/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
  
});


router.post("/", function(req, res, next) {
  let newUser = new UserModel();
  newUser.name = req.body.name;
  newUser.complete = req.body.complete;
  newUser.save().then(user => res.json(user));
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