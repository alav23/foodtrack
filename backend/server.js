const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'foodtrack',
  password: '2323.53!',
  port: 5432,
});

app.get('/api/foods', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM foods');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Errore nel recupero dati' });
  }
});

app.post('/api/nutrients', async (req, res) => {
  const selections = req.body; // [{ id: 1, qty: 200 }, ...]
  try {
    const ids = selections.map(s => s.id);
    const result = await pool.query(
      `SELECT id, calories, protein, carbs, fats FROM foods WHERE id = ANY($1)`,
      [ids]
    );
    const totals = { calories: 0, protein: 0, carbs: 0, fats: 0 };
    result.rows.forEach(food => {
      const qty = selections.find(s => s.id === food.id).qty;
      const factor = qty / 100;
      totals.calories += food.calories * factor;
      totals.protein += food.protein * factor;
      totals.carbs += food.carbs * factor;
      totals.fats += food.fats * factor;
    });
    res.json(totals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Errore calcolo nutrienti' });
  }
});

app.listen(PORT, () => console.log(`Server attivo su http://localhost:${PORT}`));
