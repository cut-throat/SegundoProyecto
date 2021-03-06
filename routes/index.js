const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');
const logout = require('../middlewares/logout');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/private', isLoggedIn, function(req, res, next) {
//   res.render('private');
// });


// router.get('/onlyme', onlyMe, function(req, res, next) {
//   res.render('private');
// });

//redireccion a la Home
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("../login");
  });
});

module.exports = router;
