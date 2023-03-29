const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
  fetch('/search')
    .then((res) => res.json())
    .then((res) => console.log(res, 'here'));
});
