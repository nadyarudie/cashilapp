// Hitung total saldo dari array transaksi
function hitungSaldo(transactions) {
    let saldo = 0;
  
    transactions.forEach((item) => {
      if (item.type === 'income') {
        saldo += item.amount;
      } else if (item.type === 'outcome') {
        saldo -= item.amount;
      }
    });
  
    return saldo;
  }
  
  // Pisahkan income dan outcome untuk keperluan chart
  function totalPerKategori(transactions) {
    let totalIncome = 0;
    let totalOutcome = 0;
  
    transactions.forEach((item) => {
      if (item.type === 'income') {
        totalIncome += item.amount;
      } else if (item.type === 'outcome') {
        totalOutcome += item.amount;
      }
    });
  
    return { totalIncome, totalOutcome };
  }
  
  module.exports = { hitungSaldo, totalPerKategori };
  