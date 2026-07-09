import pool from '../config/db.js';

/**
 * Insert a new contact message into the database
 */
export async function createContact({ name, email, message }) {
  const query = `
    INSERT INTO contacts (name, email, message)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, message, created_at
  `;
  const result = await pool.query(query, [name, email, message]);
  return result.rows[0];
}

