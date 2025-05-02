function increase() {
    const input = document.getElementById("qty");
    input.value = parseInt(input.value) + 1;
  }

  function decrease() {
    const input = document.getElementById("qty");
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    }
  }

  function swapImage(thumbnail) {
    const mainImg = document.getElementById('mainImage');
    mainImg.src = thumbnail.src;

  }