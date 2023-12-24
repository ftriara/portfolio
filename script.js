function scrollFunction() {
  var navbar = document.querySelector("nav");
  var navbarNav = document.querySelector(".nav-links");
  var list = navbarNav.getElementsByTagName("a");

  var stack = document.querySelector(".stack");
  var elemen = stack.getElementsByTagName("div");
  
  if (window.scrollY > 700) {
    navbar.style.background = "#092a44";
    
    // Iterasi dan ubah warna teks untuk setiap elemen <a>
    for (var i = 0; i < list.length; i++) {
      list[i].style.color = "#fff";
    }

    for (var i = 0; i < elemen.length; i++) {
      elemen[i].style.background = "#fff";
    }
  } else {
    navbar.style.background = "#fff";
    
    // Iterasi dan ubah warna teks untuk setiap elemen <a>
    for (var i = 0; i < list.length; i++) {
      list[i].style.color = "#092a44";
    }

    for (var i = 0; i < elemen.length; i++) {
      elemen[i].style.background = "#092a44";
    }
  }
}
window.addEventListener("scroll", scrollFunction);

document.addEventListener('DOMContentLoaded', function () {
  const stack = document.querySelector(".stack");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  
  stack.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");

    stack.classList.toggle("toggle");
  })
  
});

document.addEventListener('DOMContentLoaded', function () {
  const texts = ['an informatics student', 'data enthusiast', 'photography enjoyer'];

  let count = 0; // Menghitung indeks array
  let index = 0; // Menghitung indeks karakter pada setiap teks
  let currentText = ''; // Menyimpan teks yang sedang ditampilkan
  let letter = ''; // Menyimpan karakter yang sedang ditampilkan

  function typeFunc() {
      if (count === texts.length) {
          count = 0; // Reset ke teks pertama setelah menampilkan yang terakhir
      }

      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.getElementById('desc').textContent = letter;

      if (letter.length === currentText.length) {
          count++;
          index = 0; // Reset indeks karakter setelah menampilkan teks
      }

      setTimeout(typeFunc, 200); // Atur kecepatan animasi typing
  }

  typeFunc(); // Panggil fungsi animasi typing
});

function scrollToTop() {
  $(window).scrollTop(0);
}