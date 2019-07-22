window.addEventListener('scroll', function() {
  const wipStr = document.getElementById('wip-start');
  const workHdSp = document.querySelectorAll('h2 > span')[0];
  const sevVh = (window.innerHeight / 100) * 7;
  const realTop = wipStr.offsetTop - sevVh;

  if (realTop < document.body.scrollTop) {
    workHdSp.setAttribute('style', 'opacity: 0.7;');
  } else {
    workHdSp.setAttribute('style', 'opacity: 0;');
  }
});

document.querySelectorAll('i')[0].onclick = () => window.scroll({ top: 0, behavior: 'smooth' });
