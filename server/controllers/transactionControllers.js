const Transaction = require('../models/TransactionModel');

exports.getTransactions = (req, res) => {
  Transaction.getAllTransactions((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createTransaction = (req, res) => {
  Transaction.addTransaction(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Transaction added', id: result.insertId });
  });
};

exports.deleteTransaction = (req, res) => {
  const id = req.params.id;
  Transaction.deleteTransaction(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Transaction deleted' });
  });
};
