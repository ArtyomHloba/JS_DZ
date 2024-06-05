class Post{
    constructor(id, postName, author, text, date, likes, img, hashtag){
        this._id = id;
        this._postName = postName;
        this._author = author;
        this._text = text;
        this._date = date;
        this._likes = likes;
        this._img = img;
        this._hashtags = [];
        this._allowedHashtags = [`#cat #kitty #fullstack #education #tech #coding`];
    };

    newText(text){
        this._text = text;
    }

    plusLike(){
        this._likes += 1;
    }

    minesLike(){
        this._likes -= 1;
    }

    addHashtag(hashtag) {
        if (this._hashtags.length >= 6) {
            console.log("Cannot add more than 6 hashtags.");
        } else if (!this._allowedHashtags.includes(hashtag)) {
            console.log(`Hashtag '${hashtag}' is not allowed.`);
        } else if (this._hashtags.includes(hashtag)) {
            console.log(`Hashtag '${hashtag}' is already added.`);
        } else {
            this._hashtags.push(hashtag);
        }
    }

    getHashtags() {
        return this._hashtags;
    }

    render(){
        document.write(`
            <article class="post-cont">
                <img class="post-photo" src="./assets/img/cat.jpg" alt="cat">
                <h3 class="post-name">${this._postName}</h3>
                <p class="autor">${this._author}</p>
                <p class="post-text">${this._text}</p>
                <p class="post-date">${this._date}</p>
                <p class="post-likes">${this._likes} <span class="heart"><i class="fa-solid fa-heart"></i></span> <span class="share"><i class="fa-solid fa-share"></i></span></p>
                <p class="post-heshtag">${this._allowedHashtags}</p>
            </article>
        `);
    };
}

const post1 = new Post(
    1,
    "Kitty",
    "Animal Planet",
    "Fat cat jumping on the bed",
    2022,
    100,
);

console.log(post1);

// змінити текст поста на інший.
post1.newText("Small cat smile)");

//збільшити кількість вподобайок на 1 
// зменшити кількість вподобайок на 1.
post1.plusLike();
post1.minesLike();

// render для отримання розмітки для посту 
// (*в методі деструктуризувати інформацію з this).

post1.render();

post1.addHashtag(`javascript`);
post1.addHashtag(`fullstack`);
post1.addHashtag(`education`);




