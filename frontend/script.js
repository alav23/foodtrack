fetch('http://localhost:3000/api/foods')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('foods');
    data.forEach(food => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${food.name}</strong><br>
        Categoria: ${food.category}<br>
        Calorie: ${food.calories} | Proteine: ${food.protein}g | Carboidrati: ${food.carbs}g | Grassi: ${food.fats}g
      `;
      list.appendChild(li);
    });
  });
