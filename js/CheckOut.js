
  function updateTotals() {
    // اجمع أسعار العناصر
    let itemPrices = document.querySelectorAll('.order-item p span');
    let subtotal = 0;
    itemPrices.forEach(span => {
      subtotal += parseFloat(span.textContent);
    });

    // ضع القيمة في Subtotal
    document.querySelector('.order-totals div:nth-child(1) span').textContent = subtotal;

    // اجلب قيمة الشحن
    let shipping = parseFloat(document.querySelector('.order-totals div:nth-child(3) span').textContent);

    // احسب الإجمالي الكلي
    let total = subtotal + shipping;

    // ضع القيمة في Total
    document.querySelector('.order-totals div:nth-child(5) span').textContent = total;
  }

  // شغل الكود بعد تحميل الصفحة
  window.addEventListener('DOMContentLoaded', updateTotals);
