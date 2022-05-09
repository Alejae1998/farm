import { findById } from '../utils.js';
import { animals } from '../data.js';

const animalName = document.getElementById('animal-name');
const animalImage = document.getElementById('animal-image');
const animalSays = document.getElementById('animal-says');

const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);
animalName.textContent = animal.Name;
animalImage.src = `../assets/${animal.type}.svg`;
animalSays.textContent = animal.says;

