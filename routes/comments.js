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
        if(newComment.id && newComment.title && newComment.tags 
        && newComment.description && newComment.commenter && newComment.like){
            comments.push(newComment);
        }
        res.redirect('/');
    });
    router.get('/',function(req,res){
        const {category,sortBy} = req.query;
        let filteredComment = JSON.parse(JSON.stringify(comments));
        console.log(filteredComment,category,sortBy)
        if(category && category!=='all'){
            filteredComment = filteredComment.filter(c=>c.tags[category])
        }
        if(sortBy){
            if(sortBy=="best_match"){
                filteredComment = filteredComment.sort((a,b)=>b.like-a.like)
            }else if(sortBy=="recent"){
                filteredComment = filteredComment.sort((a,b)=>b.id-a.id)
            }
        }
        res.json(filteredComment)
    })
    router.post('/like/:id',function(req,res){
        const {id} = req.params;
        let filteredComment = comments;
        filteredComment = filteredComment.map(comment=>{
            if(comment.id!==id){
                return comment;
            }else{
                comment.liked = !comment.liked
                return comment;
            }
        })
        res.json(filteredComment)
    })
    return router;
};
