function updateCartSummary() {
    // جلب العناصر
    const priceEl = document.querySelector('#price-column span');
    const quantityEl = document.querySelector('#number-input');
    const subtotalEl = document.querySelector('#subtotle-column span');

    const summarySubtotalEl = document.querySelector('#summary-subtotal span');
    const summaryShippingEl = document.querySelector('#summary-shipping span');
    const summaryTotalEl = document.querySelector('#summary-total span');

    // تحويل السعر والكمية لأرقام
    const price = parseFloat(priceEl.textContent.trim());
    const quantity = parseInt(quantityEl.value.trim());

    // العمليات الحسابية
    const subtotal = price * quantity;
    const shipping = 20; // قيمة ثابتة
    const total = subtotal + shipping;

    // تحديث القيم في الصفحة
    subtotalEl.textContent = subtotal.toFixed(2);
    summarySubtotalEl.textContent = subtotal.toFixed(2);
    summaryShippingEl.textContent = shipping.toFixed(2);
    summaryTotalEl.textContent = total.toFixed(2);
  }

  document.querySelector('.cart-action input').addEventListener('click', updateCartSummary);

  window.addEventListener('load', updateCartSummary);