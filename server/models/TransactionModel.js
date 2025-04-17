import db from '../config/db.js';

// Menambahkan transaksi baru
export const addTransaction = (data, callback) => {
  const sql = 'INSERT INTO transactions (title, amount, type) VALUES (?, ?, ?)';
  db.query(sql, [data.title, data.amount, data.type], callback);
};

// Mengambil semua transaksi
export const getAllTransactions = (callback) => {
  const sql = 'SELECT * FROM transactions ORDER BY created_at DESC';
  db.query(sql, callback);
};
