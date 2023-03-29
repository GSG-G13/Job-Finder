const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/search')
    .then((res) => res.json())
    .then((res) => console.log(res));
});
