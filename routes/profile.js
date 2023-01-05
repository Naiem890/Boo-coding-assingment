"use strict";

const express = require("express");
const router = express.Router();

const profiles = [
  {
    id: 1,
    name: "A Martinez",
    description: `Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is a technology entrepreneur, investor, and engineer. He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; co-founder and CEO of Neuralink; founder of The Boring Company; co-founder and co-chairman of OpenAI; and co-founder of PayPal. As of February 2021, Musk's net worth stands at $184 billion, making him the 2nd richest person in the world.`,
    mbti: "ISFJ",
    enneagram: "9w3",
    variant: "sp/so",
    tritype: 725,
    socionics: "SEE",
    sloan: "RCOEN",
    psyche: "FEVL",
    temperaments:"Phlegmatic [Dominant]",
    image: "https://i.ibb.co/GTnFftZ/Elon-Musk.png",
    
  },
];

module.exports = function () {
  router.get("/*", function (req, res, next) {
    res.render("profile_template", {
      profile: profiles[0],
    });
  });

  return router;
};
