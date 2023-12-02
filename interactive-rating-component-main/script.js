document.addEventListener('DOMContentLoaded', function() {
    const ratingContainer = document.getElementById('ratingContainer');
    const submitButton = document.getElementById('submitButton');
    const selectedRatingSpan = document.getElementById('selectedRating');
    const thankYouSection = document.querySelector('.thank-you');
    const ratingSection = document.querySelector('.rating');
  
    let selectedRating = null;
  
    // Event listener for rating spans
    ratingContainer.addEventListener('click', function(event) {
      if (event.target.tagName === 'SPAN') {
        const ratingValue = parseInt(event.target.dataset.value);
        selectRating(ratingValue);
      }
    });
  
    // Event listener for submit button
    submitButton.addEventListener('click', function() {
      if (selectedRating !== null) {
        showThankYou();
      }
    });
  
    // Function to update the selected rating
    function selectRating(value) {
      selectedRating = value;
      selectedRatingSpan.textContent = value;
      // Remove the 'checked' class from all spans
      ratingContainer.querySelectorAll('span').forEach(span => span.classList.remove('checked'));
      // Add the 'checked' class to the selected span
      event.target.classList.add('checked');
    }
  
    // Function to show the thank you section
    function showThankYou() {
      ratingSection.hidden = true;
      thankYouSection.hidden = false;
    }
  });
  