let current = 0;
const images = document.querySelectorAll('.slider img');

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}


setInterval(nextImage, 3000);

// first

function scrollLeft() {
    document.querySelector('.offer-items').scrollBy({
        left: -100,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.offer-items').scrollBy({
        left: 100,
        behavior: 'smooth'
    });
}

//  catagory 
function scrollLeftctgr() {
    document.querySelector('.ctgr-items').scrollBy({
        left: -100,
        behavior: 'smooth'
    });
}
function scrollRightctgr() {
    document.querySelector('.ctgr-items').scrollBy({
        left: 100,
        behavior: 'smooth'
    });
}

//  sell 
function scrollRightsell() {
    document.querySelector('.sell-items').scrollBy({
        left: 100,
        behavior: 'smooth'
    });    
}    
function scrollLeftsell() {
    document.querySelector('.sell-items').scrollBy({
        left: -100,
        behavior: 'smooth'
    });    
}    




