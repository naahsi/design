/* Variables */
const scrollUp = document.getElementById('scroll-up');
const scrollUpY = scrollUp.offsetTop - 28;

window.addEventListener('scroll', function() {

  if (document.body.scrollTop > scrollUpY) {
    scrollUp.setAttribute('style', 'position: fixed; top: 28px; bottom: auto; transform: rotate(180deg);');
    scrollUp.onclick = () => window.scroll({ top: 0, behavior: 'smooth' });
  } else {
    scrollUp.setAttribute('style', 'position: absolute; left: 28px; bottom: 28px;');
  }

});
