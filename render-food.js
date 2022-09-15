export function renderFood(food) {
    const foodLi = document.createElement('fLi');
    foodLi.classList.add('food-item');

    const FHeaderEl = document.createElement('h2');
    FHeaderEl.textContent = food.name;

    const pEl = document.createElement('p');
    pEl.textContent = food.flavor + '' + food.type;

    foodLi.append(FHeaderEl, pEl);

    return foodLi;
}
