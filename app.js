const rating = document.querySelector('.wrapper-rating');
const btn = document.querySelector('.btn');
const ratingBtns = document.querySelectorAll('.rate-btn');
const score = document.querySelector('.thank__text__score');
const ratingMsg = document.getElementById('rate-msg');

btn.addEventListener('click', () => {
  rating.style.setProperty('--opac', 1);
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
  });
});
