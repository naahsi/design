window.addEventListener('scroll', function() {
  let wipStr = document.getElementById('wip-start'),
      workHdSp = document.querySelectorAll('h2 > span')[0],
      sevVh = (window.innerHeight / 100) * 7,
      realTop = wipStr.offsetTop - sevVh;

  if (realTop < window.scrollY) {
    workHdSp.setAttribute('style', 'opacity: 0.7;');
  } else {
    workHdSp.setAttribute('style', 'opacity: 0;');
  }
});

document.querySelectorAll('i')[0].onclick = () => window.scroll({ top: 0, behavior: 'smooth' });
