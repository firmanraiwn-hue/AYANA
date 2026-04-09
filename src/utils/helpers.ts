export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

export const generateWhatsAppLink = (
  phone: string,
  items: any[],
  total: number,
  customerInfo: { name: string; address: string; notes: string }
) => {
  let message = `Halo, saya ingin order:\n\n`;
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   Ukuran: ${item.size}\n`;
    message += `   Warna: ${item.color}\n`;
    message += `   Jumlah: ${item.quantity}\n`;
    message += `   Harga: ${formatPrice(item.price * item.quantity)}\n\n`;
  });

  message += `*Total: ${formatPrice(total)}*\n\n`;
  message += `Data Pengiriman:\n`;
  message += `Nama: ${customerInfo.name}\n`;
  message += `Alamat: ${customerInfo.address}\n`;
  if (customerInfo.notes) {
    message += `Catatan: ${customerInfo.notes}\n`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
