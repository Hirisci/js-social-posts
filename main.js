const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": ""
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


function printMember(container, post) {
    const postHTML = document.querySelector("#tpl-post").content.cloneNode(true);
    postHTML.querySelector(".post__text").innerHTML = post.content;
    postHTML.querySelector(".post__image img").src = post.media;
    postHTML.querySelector(".post-meta__author").innerHTML = post.author.name;
    postHTML.querySelector(".post-meta__time").innerHTML = post.created.split("-").reverse().join("-");
   
    let likeCount = postHTML.querySelector("#like-counter-1");
    likeCount.innerHTML = post.likes 

    let btnLike = postHTML.querySelector(".like-button");
    btnLike.setAttribute("data-postid", post.id);
    btnLike.addEventListener("click", 
        function(){
            if(this.classList.contains("like-button--liked")){
                this.classList.remove("like-button--liked");
                likeCount.innerHTML--;
                let index = this.getAttribute("data-postid")
                postListLike = postListLike.filter(function(f) { return f !== index })
                console.log(postListLike)
            } else {
                console.log(this)
                this.classList.add("like-button--liked");
                likeCount.innerHTML++;
                postListLike.push(this.getAttribute("data-postid"));
                console.log(postListLike)
            }
    })
    if(post.author.image===""){
        const img = postHTML.querySelector(".profile-pic")
        const icon = postHTML.querySelector(".post-meta__icon");
        icon.removeChild(img)
        const div = document.createElement("div")
        const span = document.createElement("span")
        div.classList.add("profile-pic-default")
        icon.append(div);
        let letter  = post.author.name.split(" ")
        span.innerHTML = `${letter[0][0]}${letter[1][0]}`
        div.append(span)
    }else {
        postHTML.querySelector(".profile-pic").src = post.author.image;
    }
    container.append(postHTML);
}


const containerHTML = document.querySelector("#container");
const templateHTML = document.querySelector("#tpl-post").content.cloneNode(true);
let postListLike = [];

for (let i = 0; i < posts.length; i++) {
    printMember(containerHTML,posts[i])
}




