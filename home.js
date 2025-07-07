// Function to show the popup with image, title, and description
function showPopup(title, description) {
    const clickedImg = event.target.src;
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-img').src = clickedImg;
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to open and close the review form
function openForm() {
    document.getElementById('popupForm').style.display = 'flex';
}

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
}

// Handle review form submission
document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload on form submission

    const username = document.getElementById('username').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Submit the review to the server
    fetch('/submit-review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${username}&rating=${rating}&review=${review}`
    })
        .then(response => response.json())
        .then(data => {
            // Update reviews list
            if (data.success) {
                displayReviews(data.reviews);
                closeForm(); // Close the form after submission
            }
        })
        .catch(error => console.error('Error:', error));
});

// Function to display reviews dynamically
function displayReviews(reviews) {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Clear current reviews

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `
            <h3>${review.username}</h3>
            <p>Rating: ${review.rating} <i class="fa fa-star"></i></p>
            <p>${review.review}</p>
        `;
        reviewsList.appendChild(reviewDiv);
    });
}

// Fetch and display reviews when the page loads
window.onload = function () {
    fetch('/reviews')
        .then(response => response.json())
        .then(data => {
            const reviewsContainer = document.getElementById('reviews-container');
            reviewsContainer.innerHTML = ''; // Clear the container first

            data.forEach(review => {
                const reviewDiv = document.createElement('div');
                reviewDiv.classList.add('review');
                reviewDiv.innerHTML = `
                    <h3>${review.username}</h3>
                    <p>Rating: ${review.rating} <i class="fa fa-star"></i></p>
                    <p>${review.review}</p>
                `;
                reviewsContainer.appendChild(reviewDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
};

const videoIcon = document.getElementById('video-icon');  // Ensure this element exists in your HTML
const videoModal = document.getElementById('video-modal');
const popupVideo = document.getElementById('popup-video');
const closeModal = document.getElementById('close-modal');

// Show modal and play video
videoIcon.addEventListener('click', () => {
    videoModal.style.display = 'flex';  // Show the modal
    popupVideo.play();  // Start playing the video
});

// Close the modal when clicking on 'X'
closeModal.addEventListener('click', () => {
    videoModal.style.display = 'none';  // Hide the modal
    popupVideo.pause();  // Pause the video when closing
    popupVideo.currentTime = 0;  // Optionally reset video to the beginning
});

// Optional: Close modal if the user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.style.display = 'none';  // Close the modal if clicked outside
        popupVideo.pause();  // Pause the video
        popupVideo.currentTime = 0;  // Reset the video to the start
    }
});
