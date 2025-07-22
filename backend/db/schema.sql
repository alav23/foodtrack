-- db/schema.sql

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    calories INTEGER,
    protein DECIMAL,
    carbs DECIMAL,
    fats DECIMAL,
    category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL
);
