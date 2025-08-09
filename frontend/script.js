let allFoods = [];
let selectedFoods = [];

async function fetchCategories() {
  const res = await fetch("http://localhost:3000/api/categories");
  const categories = await res.json();
  const select = document.getElementById("categoryFilter");

  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat.id;
    opt.textContent = cat.name;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    const selectedCategory = select.value;
    const filtered = selectedCategory === "all" 
      ? allFoods 
      : allFoods.filter(f => f.category_id == selectedCategory);
    displayFoods(filtered);
  });
}

async function fetchFoods() {
  const res = await fetch("http://localhost:3000/api/foods");
  allFoods = await res.json();
  displayFoods(allFoods);
}

function displayFoods(foods) {
  const list = document.getElementById("food-list");
  list.innerHTML = "";

  foods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = `${food.name} (${food.calories} kcal)`;
    const btn = document.createElement("button");
    btn.textContent = "Aggiungi";
    btn.onclick = () => {
      selectedFoods.push(food);
      updateSelectedList();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function updateSelectedList() {
  const list = document.getElementById("selected-list");
  list.innerHTML = "";

  let total = { calories: 0, protein: 0, carbs: 0, fats: 0 };

  selectedFoods.forEach((food, index) => {
    total.calories += food.calories;
    total.protein += parseFloat(food.protein);
    total.carbs += parseFloat(food.carbs);
    total.fats += parseFloat(food.fats);

    const li = document.createElement("li");
    li.textContent = `${food.name}`;
    const btn = document.createElement("button");
    btn.textContent = "Rimuovi";
    btn.onclick = () => {
      selectedFoods.splice(index, 1);
      updateSelectedList();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });

  document.getElementById("totals").textContent =
    `Totale: ${total.calories} kcal | Proteine: ${total.protein}g | Carboidrati: ${total.carbs}g | Grassi: ${total.fats}g`;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();
  fetchFoods();
});
