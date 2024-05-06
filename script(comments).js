const tabs = document.querySelectorAll('.tab');
const reviews = document.querySelectorAll('.review');

let currentReviewIndex = 0;

function showReview(index) {
  reviews.forEach(review => review.classList.remove('active'));
  reviews[index].classList.add('active');
}

tabs[0].addEventListener('click', () => {
  if (currentReviewIndex > 0) {
    currentReviewIndex--;
    showReview(currentReviewIndex);
  }
  else if (currentReviewIndex === 0){
    currentReviewIndex = reviews.length - 1; 
    showReview(currentReviewIndex);
  }
});

tabs[1].addEventListener('click', () => {
  if (currentReviewIndex < reviews.length - 1) {
    currentReviewIndex++;
    showReview(currentReviewIndex);
  }
  else if (currentReviewIndex === reviews.length - 1){
    currentReviewIndex = 0; 
    showReview(currentReviewIndex);
  }
});

showReview(currentReviewIndex);