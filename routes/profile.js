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
    highlighted_categories: [
      { id: "12", name: "Literature", url: "#" },
      { id: "17", name: "Technology", url: "#" },
    ]
  },
];
const comments = [
  {
    id: "1",
    title: `He’s definitely an INTP`,
    badges: {
      mbti: "INTP",
      enneagram: "8w9",
      zodiac: "Cancer",
    },
    description: `He thinks about future, Ni. He is productive too, Te. That makes him INTJ ^_^
      lmao ok guys sure.
      Let me make it easy for you guys:
      The Arguments - Ti vs Te & Ne vs Ni.
      1 - Ti vs Te:
      • Ti: Elon wants to create new things that don't exists, no one imagines. He tends to assume that the information he has is true to come to the conclusion.
      • Te: Te is mostly based on facts & evidence i.e the things which have been working for so long, on the ways everyone can trust/rely on.
      Elon Musk is an obvious Ti user.
      2 - Ne vs Ni:
      • Ne: His ideas are divergent; He does not stick to one idea, he is constantly thinking about other possible outcomes.
      • Ni: The individual who uses Ni has a clear vision about his idea & decides to follow it right away.
      ~ Also, some other arguments I have:
      - INTJs are serious people, INTPs are more flexible i.e Elon Musk is an "easy come, easy go" type of person, His Fe is so obvious, he does not takes jokes or anything personally.
      - Elon Musk is just a productive INTP who gets things done, that's why people think of him as an INTJ.`,
    commenter: {
      name: "Daniel Craig",
      image: "https://i.ibb.co/GTnFftZ/Elon-Musk.png",
    },
    like: 79
  },
  {
    id: "1",
    title: `He’s definitely an INTP`,
    badges: {
      mbti: "INTP",
      enneagram: "8w9",
      zodiac: "Cancer",
    },
    description: `He thinks about future, Ni. He is productive too, Te. That makes him INTJ ^_^
      lmao ok guys sure.
      Let me make it easy for you guys:
      The Arguments - Ti vs Te & Ne vs Ni.
      1 - Ti vs Te:
      • Ti: Elon wants to create new things that don't exists, no one imagines. He tends to assume that the information he has is true to come to the conclusion.
      • Te: Te is mostly based on facts & evidence i.e the things which have been working for so long, on the ways everyone can trust/rely on.
      Elon Musk is an obvious Ti user.
      2 - Ne vs Ni:
      • Ne: His ideas are divergent; He does not stick to one idea, he is constantly thinking about other possible outcomes.
      • Ni: The individual who uses Ni has a clear vision about his idea & decides to follow it right away.
      ~ Also, some other arguments I have:
      - INTJs are serious people, INTPs are more flexible i.e Elon Musk is an "easy come, easy go" type of person, His Fe is so obvious, he does not takes jokes or anything personally.
      - Elon Musk is just a productive INTP who gets things done, that's why people think of him as an INTJ.`,
    commenter: {
      name: "Daniel Craig",
      image: "https://i.ibb.co/GTnFftZ/Elon-Musk.png",
    },
    like: 79
  }
];
const categories = [
  { id: "1", name: "Anime", url: "#" },
  { id: "2", name: "Music", url: "#" },
  { id: "3", name: "Politics", url: "#" },
  { id: "4", name: "Historians", url: "#" },
  { id: "5", name: "Gaming", url: "#" },
  { id: "6", name: "Art", url: "#" },
  { id: "7", name: "Comics", url: "#" },
  { id: "8", name: "Science", url: "#" },
  { id: "9", name: "Philosophy", url: "#" },
  { id: "10", name: "Movies", url: "#" },
  { id: "11", name: "Television", url: "#" },
  { id: "12", name: "Literature", url: "#" },
  { id: "13", name: "Business", url: "#" },
  { id: "14", name: "Religion", url: "#" },
  { id: "15", name: "Pop Culture", url: "#" },
  { id: "16", name: "Internet", url: "#" },
  { id: "17", name: "Technology", url: "#" },
];

module.exports = function () {
  router.post('/comments', (req, res) => {
    const newComment = {
      id: comments.length.toString(),
      title: req.body.title,
      badges:{},
      description: req.body.description,
      commenter: {
        name: "Daniel Craig",
        image: "https://i.ibb.co/GTnFftZ/Elon-Musk.png",
      },
      like: 0
    };
    comments.push(newComment);
    console.log(newComment);
    res.redirect('/');
  });
  router.get("/*", function (req, res, next) {
    res.render("profile_template", {
      profile: profiles[0],
      comments: comments,
      categories: categories
    });
  });

  return router;
};
