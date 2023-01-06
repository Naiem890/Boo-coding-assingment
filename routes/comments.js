"use strict";

const express = require("express");
const router = express.Router();

const {comments,categories,profiles} = require("../data/mock_data.json")

module.exports = function () {
    router.post('/', function(req, res, next) {
        const {mbti,enneagram,zodiac} = req.body
        const newComment = {
            id: comments.length.toString(),
            title: req.body.title,
            tags:{
                mbti,
                enneagram,
                zodiac
            },
            description: req.body.description,
            commenter: {
                name: "Daniel Craig",
                image: "/static/Elon_musk.png",
            },
            like: 0
        };
        
        comments.push(newComment);
        res.redirect('/');
    });
    router.get('/',function(req,res){
        const {category,sortBy} = req.query;
        let filteredComment = JSON.parse(JSON.stringify(comments));
        console.log(filteredComment,category,sortBy)
        if(category && category!=='all'){
            filteredComment = filteredComment.filter(c=>c.tags[category])
        }
        // if(sortBy){

        // }
        res.render("profile_template", {
            profile: profiles[0],
            comments: filteredComment,
            categories: categories
          });
    })
    return router;
};
