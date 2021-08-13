var express = require('express');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  };

  router.get("/user", secured, (req, res, next) => {
    const { _raw, _json, ...userProfile } = req.user;
    res.render("user", {
      title: "Profile",
      userProfile: userProfile
    });
  });

  module.exports = router;