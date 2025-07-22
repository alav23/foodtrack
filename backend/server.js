const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'tuo_utente',
  host: 'localhost',
  database: 'foodtrack',
  password: 'tua_password',
  port: 5432,
});

app.get('/api/foods', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT foods.*, categories.name AS category
      FROM foods
      JOIN categories ON foods.category_id = categories.id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Errore nel recupero dati' });
  }
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
