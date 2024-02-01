$(document).ready(function() {
    $('.fotorama').fotorama({
        width: '900px',
        ratio: '700/467',
        maxwidth: '100%',
        transition: 'dissolve', 
        autoplay: 3000 
    });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  var dropdown = document.querySelector('.dropdown');
  dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'flex' : 'none';
}
