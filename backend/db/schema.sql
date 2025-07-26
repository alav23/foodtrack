CREATE TABLE foods (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  calories INTEGER,
  protein DECIMAL,
  carbs DECIMAL,
  fats DECIMAL
);
