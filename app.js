const rating = document.querySelector('.wrapper-rating');
const btn = document.querySelector('.btn');
const ratingBtns = document.querySelectorAll('.rate-btn');
const score = document.querySelector('.thank__text__score');
const ratingMsg = document.getElementById('rate-msg');
const resetOver = document.querySelector('.overlay');

function resetOpacity() {
  rating.style.setProperty('--opac', 1);
  setTimeout(() => {
    rating.style.setProperty('--opac', 0);
  }, 1100);
}

btn.addEventListener('click', () => {
  resetOpacity();
  setTimeout(() => {
    resetOver.style.setProperty('display', 'block');
  }, 1800);

  rating.classList.add('rating--sh');
  if (!document.querySelector('.rate-btn.checked')) {
    score.innerHTML = 'No rating?';
  }
});

ratingBtns.forEach((ratingBtn) => {
  ratingBtn.addEventListener('click', () => {
    document.querySelector('.checked')?.classList.remove('checked');
    ratingBtn.classList.add('checked');
    ratingMsg.innerHTML = ratingBtn.innerHTML;
    score.innerHTML = `You selected <span id="rate-msg">${ratingMsg.innerHTML}</span> out of 5`;
  });
});

resetOver.onclick = () => {
  resetOpacity();
  rating.classList.remove('rating--sh');
  resetOver.style.setProperty('display', 'none');
  ratingBtns.forEach((ratingBtn) => {
    ratingBtn.classList.remove('checked');
  });
};
