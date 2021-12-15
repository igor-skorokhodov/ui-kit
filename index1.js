const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});

const checkboxBig = document.querySelector(".checkbox_big");
checkboxBig.addEventListener("click", () => {
  checkboxBig.classList.toggle('checkbox_big_inactive');
})

const checkboxBigInactive = document.querySelector(".checkbox_big_inactive");
checkboxBigInactive.addEventListener("click", () => {
  checkboxBigInactive.classList.toggle('checkbox_big');
  checkboxBigInactive.classList.toggle('checkbox_big_inactive');
})

const checkboxSmall = document.querySelector(".checkbox_small");
checkboxSmall.addEventListener("click", () => {
  checkboxSmall.classList.toggle('checkbox_small_inactive');
})

const checkboxSmallInactive = document.querySelector(".checkbox_small_inactive");
checkboxSmallInactive.addEventListener("click", () => {
  checkboxSmallInactive.classList.toggle('checkbox_small');
  checkboxSmallInactive.classList.toggle('checkbox_small_inactive');
})