var ar = document.getElementById('arrow');

var listener = function(e) {
  ar.style.left = e.pageX + "px";
};

arrow.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener);
});

arrow.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener);
});