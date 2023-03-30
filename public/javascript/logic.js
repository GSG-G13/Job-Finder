const searchForm = document.querySelector('form');
const titleInp = document.querySelector('.title-inp');
const locationInp = document.querySelector('.location-inp');
const jobsContainer = document.querySelector('.jobs-container');

function openLoader() {
  document.querySelector('.load').style.display = 'flex';
}

function closeLoader() {
  document.querySelector('.load').style.display = 'none';
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  openLoader();

  fetch('/search')
    .then((res) => res.json())
    .then((res) => {
      closeLoader();
      titleInp.value = '';
      locationInp.value = '';
      const data = res.data;
      data.forEach((job) => {
       const card = createCard(job)
       appendChildren(jobsContainer, card)
      });
    });
});
