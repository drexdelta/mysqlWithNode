//////// creating user info //////////////////
const CreateUser = document.querySelector('.CreateUser');

CreateUser.addEventListener('submit', function(e){

    e.preventDefault();
    const username = document.getElementById('signupName').value;
    const handle = document.getElementById('signupHandle').value;
    const password = document.getElementById('signupPassword').value;
    const gender = document.getElementById('signupGender').value;
    console.log(username);
    console.log(handle);
    console.log(password);
    console.log(gender);

    // const password = CreateUser.querySelector('.password').value;
    // post('/createUser', { username, password })
    post('/createUser' , {username , password , gender , handle});

});



///////////// for fetching posts of given user ID //////////////////
const fetchPostsOfUser = document.querySelector('.fetchPostsOfUser');

fetchPostsOfUser.addEventListener('submit' , function(e) {
    e.preventDefault();
    const userId = document.getElementById('fetchPostOfUserId').value;
    post('/fetchPostsOfUserId' , {userId});
});


///////////// for writing post of user   //////////////////////
const writePost = document.querySelector('.writePost');
writePost.addEventListener('submit' , function(e){

    e.preventDefault();

    // get user id and content
    const userId = document.getElementById('writePostId').value;
    const content = document.getElementById('writePostContent').value;
    console.log(userId);
    console.log(content);

    // send post request to write this to database
    post('/writePost' , {userId , content});

});

///////////// for fetching recent posts ////////////////
const recentPostFetch = document.querySelector('.fetchRecentPost');

recentPostFetch.addEventListener('submit' , function(e){
    e.preventDefault();

    post('/fetchRecentPosts' , {});

})
//////// sending post request ///////////////////
function post (path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}