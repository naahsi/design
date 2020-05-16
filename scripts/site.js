// Variables
let copy = document.getElementById('copy-email'),
    notify = document.getElementById('copy-notification'),
    workTop = document.getElementById('work').offsetTop,
    toWork = document.querySelectorAll('.to-work path')[0],
    toTop = document.querySelectorAll('.to-top path')[0];

// Copy to clipboard
const clickCopy = (e) => {
  if (e.target == copy) {
    navigator.clipboard.writeText('ishaan.sinhaa@gmail.com')
    .then(() => {
      notify.innerText = '[copied!]';
    })
    .catch(err => {
      console.log('Email address not copied', err);
      notify.innerText = '[email address not copied]';
    });
  }
};

// Go to Work
const goToWork = (e) => {
  if (e.target == toWork) {
    window.scroll({ top: workTop, left: 0, behavior: 'smooth' });
  }
};

// Back to top
const backToTop = (e) => {
  if (e.target == toTop) {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
};

// Event listeners
window.addEventListener('click', (e) => {
  clickCopy(e);
  goToWork(e);
  backToTop(e);
});

window.addEventListener('touchend', (e) => {
  clickCopy(e);
  goToWork(e);
  backToTop(e);
});
