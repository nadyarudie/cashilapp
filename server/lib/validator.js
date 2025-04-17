// Validasi data transaksi
function isValidTransaction(data) {
    if (!data.type || !['income', 'outcome'].includes(data.type)) {
      return false;
    }
    if (!data.amount || isNaN(data.amount) || data.amount <= 0) {
      return false;
    }
    if (!data.description || data.description.trim() === '') {
      return false;
    }
    return true;
  }
  
  module.exports = { isValidTransaction };  