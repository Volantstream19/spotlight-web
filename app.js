// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';

// initialize global state
const candyList = document.getElementById('candy-list');

function displayCandies() {
    candyList.innerHTML = '';

    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyList.append(candyEl);
    }
}

displayCandies();
