const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all books
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM books');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new book
router.post('/', async (req, res) => {
  const { title, author, isbn } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO books (title, author, isbn) VALUES ($1, $2, $3) RETURNING *',
      [title, author, isbn]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT (update) a book
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, isbn } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE books SET title = $1, author = $2, isbn = $3 WHERE id = $4 RETURNING *',
      [title, author, isbn, id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a book
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM books WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
