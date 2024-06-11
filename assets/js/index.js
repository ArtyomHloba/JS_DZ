// // Обробка помилок

// function pow(base, exponent){
//     if(typeof base !== `number`){
//         throw new Error('Введіть коректне число')
//     }
//     if(typeof exponent !== 'number'){
//         throw new Error('Введіть коректну степень') 
//     }

//     if(!Number.isInteger(exponent) || exponent > Number.MAX_SAFE_INTEGER){
//         throw new Error('Степень повинна бути більше за 0')
//     }

//     if(base === 0){
//         return 0;
//     }

//     if(exponent === 0 || base === 1){
//         return 1;
//     }

//     if(exponent < 0) {
//         return 1 / pow(base, exponent * -1)
//     }

//     return base * pow(base, exponent - 1);
// }

// try {
//     const pow1 = pow(2, 2);
//     console.log(pow1);
// } catch (error) {
//     console.log(error);
// }

// console.log(`Після обробки`)

// function counter(number) {
//     let count = 0;
  
//     function inc() {
//       return count += number;
//     }
  
//     return inc;
//   }
  
//   const count1 = counter(5);
//   console.log(count1());
//   console.log(count1());
//   console.log(count1());
//   console.log(count1());
  
//   function counter(n, e) {
//     let count = n;
  
//     function inc() {
//       return count += e;
//     }
  
//     return inc;
//   }
  
//   const count1 = counter(+prompt("Введіть початкове число"), +prompt("введіть крок лічильник"));
//   console.log(count1());
//   console.log(count1());
//   console.log(count1());
//   console.log(count1());


// const ALLOWED_HASHTAGS = [
//     '#cat', 
//     '#kitty', 
//     '#fullstack', 
//     '#education', 
//     '#tech', 
//     '#coding',
// ];
// class Post{
//     constructor(id, postName, author, text, date, likes, img){
//         this._id = id;
//         this._postName = postName;
//         this._author = author;
//         this._text = text;
//         this._date = date;
//         this._likes = likes;
//         this._img = img;
//         this._hashtags = [];
//     };

//     newText(text){
//         this._text = text;
//     }

//     plusLike(){
//         this._likes += 1;
//     }

//     minesLike(){
//         this._likes -= 1;
//     }

//     addHashtag(hashtag) {
//         if (this._hashtags.length >= 6) {
//             console.log("Cannot add more than 6 hashtags.");
//         } else if (!ALLOWED_HASHTAGS.includes(hashtag)) {
//             console.log(`Hashtag '${hashtag}' is not allowed.`);
//         } else if (this._hashtags.includes(hashtag)) {
//             console.log(`Hashtag '${hashtag}' is already added.`);
//         } else {
//             this._hashtags.push(hashtag);
//         }
//     }

//     getHashtags() {
//         return this._hashtags;
//     }

//     render(){
//         document.write(`
//             <article class="post-cont">
//                 <img class="post-photo" src="./assets/img/cat.jpg" alt="cat">
//                 <h3 class="post-name">${this._postName}</h3>
//                 <p class="autor">${this._author}</p>
//                 <p class="post-text">${this._text}</p>
//                 <p class="post-date">${this._date}</p>
//                 <p class="post-likes">${this._likes} <span class="heart"><i class="fa-solid fa-heart"></i></span> <span class="share"><i class="fa-solid fa-share"></i></span></p>
//                 <p class="post-hashtag">${this._hashtags.join(' ')}</p>
//             </article>
//         `);
//     };
// }

// const post1 = new Post(
//     1,
//     "Kitty",
//     "Animal Planet",
//     "Fat cat jumping on the bed",
//     2022,
//     100,
// );

// console.log(post1);

// // змінити текст поста на інший.
// post1.newText("Small cat smile)");

// //збільшити кількість вподобайок на 1 
// // зменшити кількість вподобайок на 1.
// post1.plusLike();
// post1.minesLike();

// // render для отримання розмітки для посту 
// // (*в методі деструктуризувати інформацію з this).

// post1.addHashtag('#cat');
// post1.addHashtag('#dfsafsdf');
// post1.addHashtag('#kitty');
// post1.render();







