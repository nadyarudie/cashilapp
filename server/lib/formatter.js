// Format angka ke format Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  }
  
  // Format tanggal ke format Indonesia
  function formatTanggal(date) {
    return new Date(date).toLocaleDateString('id-ID');
  }
  
  module.exports = { formatRupiah, formatTanggal };
  