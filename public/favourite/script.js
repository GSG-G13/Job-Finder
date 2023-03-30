const jobsContainer = document.querySelector('.jobs-container');

window.onload = () => {
  const jobs = Array.from(JSON.parse(localStorage.getItem('jobs')));

  jobs.forEach((job) => {
    jobsContainer.insertAdjacentHTML('afterbegin', `
        <div class="card">
        <div class="top">
          ${job.compLogo && `<img src="${job.compLogo}" alt="${job.compName}"/>`}
        </div>
        <div class="middle">
          <h1 class="title">${job.title}</h1>
          <p>${job.jobType}</p>
          <span>${job.compName}</span>
        </div>
        <div class="bottom" onclick="addToFav()">
          <a href="${job.link}">
            <button>APPLY</button>
          </a>
        </div>
      </div>
        `);
  });
};
