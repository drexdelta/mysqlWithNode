const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/createUser', function(req,res) {

    store.createUser({ // promise
        username: req.body.username,
        password: req.body.password,
        handle  : req.body.handle,
        gender  : req.body.gender
    }).then( function() {res.sendStatus(200) } ); // successfully registerred user

});

app.post('/fetchPostsOfUserId' , function(req , res) {

    var userIdString = req.body.userId;
    var userIdNum = parseInt(userIdString);

    console.log(" fetinc for " , userIdNum);

    store.fetchPostsOfUserId({
        userId : userIdNum
    }).then( function(result) {

        // returning JSON form of data to client
        res.json(result);

    });

});


app.post('/writePost' , function(req , res) {

    // getting userId as string parameter,
    var userIdString = req.body.userId;
    var userIdNum = parseInt(userIdString); // parsing to integer value


    console.log("  integer userid is " , userIdNum);

    store.writePost({ // promise
        userId : userIdNum,
        content : req.body.content
    }).then( function() {
        res.sendStatus(200); // sucessfully writen post
        } , function(){
            res.sendStatus(417);
    }); //failed to write post

});


app.post('/fetchRecentPosts' , function(req,res){

    store.getPosts().then(function(result){
        res.json(result); // returning JSON format of data
    } , function(err){
        res.sendStatus(417); // failed
    });
});



app.listen(7555, function(){
    console.log('Server running on http://localhost:7555')
});