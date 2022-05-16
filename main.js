const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
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
    postHTML.querySelector(".profile-pic").src = post.author.image;
    postHTML.querySelector("#like-counter-1").innerHTML = post.likes
    postHTML.querySelector(".like-button").id = post.id
    container.append(postHTML);
}


const containerHTML = document.querySelector("#container");
const templateHTML = document.querySelector("#tpl-post").content.cloneNode(true);


for (let i = 0; i < posts.length; i++) {
    printMember(containerHTML,posts[i])
}

const likeBtn = document.querySelectorAll(".like-button")
const likeCoun = document.querySelectorAll(".js-likes-counter")

for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", function(){
        if(this.classList.contains("like-button--liked")){
            this.classList.remove("like-button--liked")
            let tot =likeCoun[this.id-1].innerHTML 
            tot--
            likeCoun[this.id-1].innerHTML = tot
        } else {
            console.log("aggiungi sta classe")
            this.classList.add("like-button--liked")
            let tot =likeCoun[this.id-1].innerHTML 
            tot++
            likeCoun[this.id-1].innerHTML = tot
        }
    })
    
}




