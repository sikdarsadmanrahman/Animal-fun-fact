import { animals } from './animals';
import React from 'react'; 
import {createRoot} from 'react-dom/client';
//declaring variables
const container = document.getElementById('app');
const root = createRoot(container);
const title = '';
const showBackground = true;
//setting background-color
const background = <img className='background' alt ="ocean" src="/images/ocean.jpg"/>

//displaying facts
function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalObj = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random()* animalObj.facts.length);
  const element = document.getElementById('fact');
  element.innerHTML = animalObj.facts[optionIndex];
}

//creating imaegs array
const images = [];
for(const animal in animals) {
  images.push(<img key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button' onClick={displayFact} />)
}

//creating the JSX code
const animalFacts = 
(
  <div>
    {showBackground === true && background}
    <h1>
      {title || 'Click an animal for a fun fact'}
    </h1>

    <p id='fact'></p>

    <div className='animals'>
      {images}
    </div>
  </div>
)

root.render(animalFacts);