
async function fetchFoods() {
  try {
    const response = await fetch('http://localhost:3000/api/foods');
    const foods = await response.json();

    const list = document.getElementById('food-list');

    foods.forEach(food => {
      const item = document.createElement('li');
      item.innerText = `${food.name} - ${food.calories} kcal`;
      list.appendChild(item);
    });
  } catch (err) {
    console.error('Errore nel recupero dati:', err);
  }
}

fetchFoods();
