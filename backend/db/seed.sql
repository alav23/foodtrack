-- Pulisce le tabelle se necessario
TRUNCATE TABLE foods RESTART IDENTITY CASCADE;
TRUNCATE TABLE categories RESTART IDENTITY CASCADE;

-- Inserisce le categorie
INSERT INTO categories (name) VALUES 
  ('Frutta'),
  ('Verdura'),
  ('Proteine'),
  ('Carboidrati'),
  ('Grassi');

-- Inserisce gli alimenti con il category_id corretto
INSERT INTO foods (name, calories, protein, carbs, fats, category_id) VALUES
  ('Mela', 52, 0.3, 14, 0.2, 1),       -- Frutta
  ('Banana', 89, 1.1, 23, 0.3, 1),     -- Frutta
  ('Broccoli', 55, 3.7, 11, 0.6, 2),   -- Verdura
  ('Petto di pollo', 165, 31, 0, 3.6, 3); -- Proteine
