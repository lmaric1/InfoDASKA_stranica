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

