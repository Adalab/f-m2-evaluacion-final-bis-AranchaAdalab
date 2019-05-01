'use strict';

const start = document.querySelector('.start');
const input = document.querySelectorAll('.input');
let number = 4;
const list = document.querySelector('.cards_list');
const photoAdalab = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';

function numberCards(event) {
  const gilty = event.currentTarget;
  number = gilty.value;
}

function search () {
  list.innerHTML = '';
  const url = `https://raw.githubusercontent.com/Adalab/cards-data/master/${number}.json`;
  fetch(url)
    .then (response => response.json())
    .then (data => {
      for (const result of data) {
        const pokemon = result.image;
        list.innerHTML += `<li class="item_pokemon"><img class="pokemon_photo" src="${pokemon}"><img class="adalab_photo hidden" src="${photoAdalab}"></li>`;
      }
      const allPokemon = document.querySelectorAll('li');
      for (const li of allPokemon) {
        li.addEventListener('click', frontBack);
      }
    });
}

function frontBack(event) {
  const li = event.currentTarget;
  const photo = li.querySelector('.pokemon_photo');
  const photoGreen = li.querySelector('.adalab_photo');
  photo.classList.toggle('hidden');
  photoGreen.classList.toggle('hidden');
}

for (const inputItem of input) {
  inputItem.addEventListener('change', numberCards);
}

start.addEventListener('click', search);
