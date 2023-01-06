"use strict";

const express = require("express");
const router = express.Router();

const {comments,categories,profiles} = require("../data/mock_data.json")

module.exports = function () {
  router.get("/", function (req, res, next) {
    res.render("profile_template", {
      profile: profiles[0],
      comments: [],
      categories: categories
    });
  });

  return router;
};
