const createHtmlElement = (element, className, id, textContent) => {
  const ele = document.createElement(element);
    if(className) {
      ele.className = className;
  }
    if(id){
      ele.id = id
    }
    if(textContent){
      ele.textContent = textContent;
    }
    return ele;
}

const appendChildren = (parent, ...Children) => {
  Children.forEach((child) => {
    parent.appendChild(child);
  });
};

const createCard = (job) => {
  const div = createHtmlElement('div', 'card');
  const topDiv = createHtmlElement('div', 'top');
  const middelDiv = createHtmlElement('div', 'middel');
  const bottomDiv = createHtmlElement('div', 'bottom');
  const img = createHtmlElement('img');
  img.setAttribute('src', `${job.employer_logo}`);
  const span = createHtmlElement('span');
  const icon = createHtmlElement('i', 'fa-regular fa-heart');
  appendChildren(span, icon);
  appendChildren(topDiv, img, span);
  const h1 = createHtmlElement('h1', null, null, job.job_title);
  const p = createHtmlElement('p', null, null, job.job_employment_type);
  const spanMiddel = createHtmlElement('span', null, null, job.employer_name);
  appendChildren(middelDiv, h1, p, spanMiddel);
  const spanBottom = createHtmlElement('span', null, null, '7 day ago');
  const a = createHtmlElement('a');
  a.setAttribute('href', `${job.job_apply_link}`);
  const button = createHtmlElement('button', null, null, 'Applay');
  appendChildren(a, button);
  appendChildren(bottomDiv, spanBottom, a);
  appendChildren(div, topDiv, middelDiv, bottomDiv);
  return div;
};
