let copy = document.getElementById('copy-email'),
    notify = document.getElementById('copy-notification'),
    workTop = document.getElementById('work').offsetTop,
    toWork = document.querySelectorAll('.to-work path')[0],
    toTop = document.querySelectorAll('.to-top path')[0];

const clickCopy = (e) => {
  if (e.target == copy) {
    navigator.clipboard.writeText('ishaan.sinhaa@gmail.com')
    .then(() => {
      notify.innerText = '[copied!]';
    })
    .catch(err => {
      console.log('Email address not copied', err);
    });
  }
};

const goToWork = (e) => {
  if (e.target == toWork) {
    window.scroll({ top: workTop, left: 0, behavior: 'smooth' });
  }
};

const backToTop = (e) => {
  if (e.target == toTop) {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
};

window.addEventListener('click', (e) => {
  clickCopy(e);
  goToWork(e);
  backToTop(e);
});
window.addEventListener('touchend', clickCopy, false);
