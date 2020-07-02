var requestOptions = {
      method: 'GET',
      headers: {
        'X-API-Key': '391bdda2-de3f-4a9b-b870-4fa54a3570eb'
      },
      redirect: 'follow',
      mode: 'cors',
      credentials: 'include'
    };

    fetch("https://www.shelterluv.com/api/v1/animals", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

// Variables
let copy = document.getElementById('copy-email'),
    notify = document.getElementById('copy-notification'),
    workTop = document.getElementById('work').offsetTop,
    toWork = document.querySelectorAll('.to-work path')[0],
    toTop = document.querySelectorAll('.to-top path')[0];

// iOS copy solution
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
  notify.innerHTML = '[ <a href="mailto:ishaan.sinhaa@gmail.com">ishaan.sinhaa@gmail.com</a> ]';
}

// Copy to clipboard
const clickCopy = (e) => {
  if (e.target == copy) {
    navigator.clipboard.writeText('ishaan.sinhaa@gmail.com')
    .then(() => {
      notify.innerText = '[ copied! ]';
    })
    .catch(err => {
      console.log('email address not copied', err);
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
