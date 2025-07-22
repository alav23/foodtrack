-- db/seed.sql

INSERT INTO categories (name) VALUES
('Frutta'), ('Verdura'), ('Cereali'), ('Proteine'), ('Grassi');

INSERT INTO foods (name, calories, protein, carbs, fats, category_id) VALUES
('Mela', 52, 0.3, 14, 0.2, 1),
('Banana', 89, 1.1, 23, 0.3, 1),
('Petto di pollo', 165, 31, 0, 3.6, 4),
('Pane integrale', 247, 9, 41, 4.2, 3);
