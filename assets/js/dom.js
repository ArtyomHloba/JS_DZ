// const changeTextBtn = document.querySelector('#renderBtn')

// function eventText(e){
//     changeTextBtn.textContent = 'Змінений текст';
//     changeTextBtn.style.backgroundColor = "blue";
//     changeTextBtn.style.color = "white";
// }

// changeTextBtn.onclick = eventText;

// const imgCat1 = document.querySelector('#imgCat')
// imgCat1.style.width = "300px";

// imgCat1.onmouseenter = e => {
//     imgCat1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TZSSagPJ9vFKl-fCAFp1b3e3MP0ysmnKCw&s";
//   };
  
//   imgCat1.onmouseleave = e => {
//     imgCat1.src = "./assets/img/cat.jpg";
//   };


//   const user = {
//     firstName: 'Test',
//     lastName: 'Testovych',
//     profilePhoto: 'https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg',
//     birthday: new Date('2000-05-16'),
//     nickname: 'super dev',
//     likesCount: 10,
// }


// document.querySelector('.bnt-render').addEventListener('click', () =>{
//   const article = document.querySelector('.render-card')

//   article.innerHTML = `
//     <img class="user-photo" src="${user.profilePhoto}" alt="Profile Photo">
//       <p>Ім'я: ${user.firstName}</p>
//       <p>Прізвище: ${user.lastName}</p>
//       <p>Нікнейм: ${user.nickname}</p>
//       <p>Дата народження: ${user.birthday.toLocaleDateString('uk-UA')}</p>
//       <p>Кількість лайків: ${user.likesCount} <span class="heart"><i class="fa-solid fa-heart"></i></span></p> 
// `;

//   const heart = document.querySelector('.heart');
//   if(heart){
//   heart.addEventListener('click', () => {
//     heart.style.color = 'red';
//   });
//   };
// });

