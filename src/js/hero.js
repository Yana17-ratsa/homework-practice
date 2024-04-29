// //TODO:
// //!ПОДІЯ => ЗАПИТ => РЕНДЕР

// const refs ={
//     formEL: document.querySelector(".js-hero-form"),
//     infoEl: document.querySelector(".js-hero-container"),
// }


// //Подія
// refs.formEL.addEventListener('submit', e => {
//     e.preventDefault();
//     const query = refs.formEL.elements.superhero.value;
    
//     getHero(query).then(data => {
//       const markup = renderMarkup(data);

//       refs.infoEl.innerHTML = markup;
//     })
// });

// //Запит
// function getHero(query) {
//   const BASE_URL = 'https://superhero-search.p.rapidapi.com';
//   const END_POINT = '/api/';
//   const params = new URLSearchParams({
//       hero: query,
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   const options = {
//       headers: {
//           'X-RapidAPI-Key': '618bfb86b2msh5ed366030fd8cc1p187744jsncbfb847c0eaa',
//           'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
//       },
//   };

//   return fetch(url, options).then(res=>res.json());
// }


// //Рендер
// function renderMarkup(hero) {
//     return `<div class="hero-card card">
//     <div class="image-container">
//       <img
//         src="${hero.images.lg}"
//         alt="#"
//         class="hero-image"
//       />
//     </div>
//     <div class="hero-body">
//       <h4 class="hero-name">${hero.name}</h4>
  
//       <div class="hero-powerstats">
//         <p class="hero-bio">FullName - ${hero.biography.fullName}</p>
//         <p class="hero-bio">Publisher - Marvel Comics</p>
//         <p class="hero-bio">Alignment - good</p>
//         <p class="hero-bio">Gender - Male</p>
//         <p class="hero-bio">Race - Human</p>
//       </div>
  
//       <div class="hero-powerstats">
//         <span>Power: 10</span>
//         <span>Strength: 10</span>
//         <span>Speed: 10</span>
//         <span>Combat: 10</span>
//       </div>
//     </div>
//   </div>`;
// }


