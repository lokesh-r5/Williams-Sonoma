var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('.nav');
var mainImage= document.querySelector('#main-image');
var thumbnails= document.querySelectorAll('.thumbnail div');
var cart= document.querySelector('.cart');
var cartMessage= document.querySelector('.cart_message');
var dt= document.querySelectorAll('dt');
var dd= document.querySelectorAll('dd');
var replaceImage= "assets/product-large/";

// Hide expandable summary tabs by default
for(var i=0; i<dd.length; i++){
  dd[i].style.display = "none";
}

// To open navigation menu
menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

// To hide navigation menu
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

// To toggle between different images
for(var i=0; i<thumbnails.length; i++) {
  thumbnails[i].style.border = "none";
  thumbnails[i].addEventListener('click',function() {
    for(var j=0; j<thumbnails.length; j++) {
      thumbnails[j].classList.remove('thumbnail_active');
    }
    replaceImage+= this.id +".jpg";
    mainImage.src= replaceImage;
    console.log(replaceImage);
    this.classList.add('thumbnail_active');
    replaceImage= "assets/product-large/";
    console.log(replaceImage);
  });
}

// To display cart_message for 3 seconds (To notify user that item added to cart)
cart.addEventListener('click', function() {
  cartMessage.style.display= "block";
  setTimeout(function() {
    cartMessage.style.display= "none";
  }, 3000);
});

// To perform expand-collapse on expandable tabs and change arrow icons accordingly
for(var i=0; i<dt.length; i++) {
  dt[i].addEventListener('click', function() {
    console.log(this);
    if(this.nextElementSibling.style.display=== "none") {
        this.nextElementSibling.style.display= "block";
        this.childNodes[1].src= "assets/product-description/arrow-expanded.png";
    }
    else {
      this.nextElementSibling.style.display= "none";
      this.childNodes[1].src= "assets/product-description/arrow-collapsed.png";
    }
  });
}
