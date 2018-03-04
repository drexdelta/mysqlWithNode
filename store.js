
const knex = require('knex')(require('./knexfile'));

module.exports = {

    createUser ({ username, password , handle , gender}) {

        console.log(`Add user ${username} with password ${password}`);
        console.log(` gender is ${gender} , with handle is ${handle} `);

        // knex returns promise.
        return knex('userInfoTable').insert({
            username,
            password,
            gender,
            handle
        });

    },

    fetchPostsOfUserId({userId}){


        console.log("starting");

        // no need to select userid, just select content and postId
        return knex('postsInfoTable').where({
            'userId' : userId
        }).select('postId' , 'content').then(function(result){

            console.log("here");
            console.log(result.length);

            for(var i = 0 ; i < result.length ; i++){
                console.log(result[i]);
            }

            return result;

        });

    },

    writePost({userId, content}){

        console.log(" in store.js , came ot write post form user id " , userId);
        console.log(" content is " , content);

        return knex('postsInfoTable').insert({
            userId,
            content
        });

    },

    getPosts({}){

        // here we can return posts based on optimisation, like number of posts to be returned or if
        // post is already viewed by person, then don't send it etc.

        return knex('postsInfoTable').select('userId','content','postId');

    }




}