function showRecommendation() {
  // Get the selected answers
  const genre = document.querySelector('input[name="genre"]:checked');
  const length = document.querySelector('input[name="length"]:checked');
  const ending = document.querySelector('input[name="ending"]:checked');

  // If not all answers are selected, alert the user
  if (!genre || !length || !ending) {
      alert('Please answer all questions.');
      return;
  }

  let drama = {};

  // Drama recommendation based on selected answers
  if (genre.value === "romance" && length.value === "short" && ending.value === "happy") {
      drama = {
          name: "Crash Landing On You",
          imageUrl: "https://m.media-amazon.com/images/M/MV5BZjM3ZGQ4ZTMtOTNjMS00NmJlLTljMWUtNWExMzJhMGJlMWNiXkEyXkFqcGc@._V1_.jpg", // Replace with actual image URL
          trailerUrl: "https://www.youtube.com/watch?v=GVQGWgeVc4k"
      };
  } else if (genre.value === "action" && length.value === "long" && ending.value === "sad") {
      drama = {
          name: "Vincenzo",
          imageUrl: "https://m.media-amazon.com/images/M/MV5BNjA1YmJiNTMtMDc4OC00ZjlkLTgyMjctYzRmMWJhMmZhMjkyXkEyXkFqcGc@._V1_.jpg", // Replace with actual image URL
          trailerUrl: "https://www.youtube.com/watch?v=_J8tYxYB_YU"
      };
  } else if (genre.value === "comedy" && length.value === "short" && ending.value === "happy") {
      drama = {
          name: "Strong Woman Do Bong Soon",
          imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/f6508dd3c2ab69269907fbd74a0db8dbb2f653f641c5521a50b0eeff54b5f18b.jpg", // Replace with actual image URL
          trailerUrl: "https://youtube.com/watch?v=ysJzkl-SU1Q"
      };
  } else if (genre.value === "historical" && length.value === "long" && ending.value === "sad") {
      drama = {
          name: "The Red Sleeve",
          imageUrl: "https://1.vikiplatform.com/c/38101c/f0d1235bb9.jpg?x=b", // Replace with actual image URL
          trailerUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXuFiXSPa-l4uVk6fFhZsbhKz-2LFymnMhA&s"
      };
  }

  // Hide the quiz and show the recommendation
  document.getElementById('quiz-questions').style.display = 'none';

  // Update recommendation section with the selected drama
  document.getElementById('dramaName').textContent = drama.name;
  document.getElementById('dramaImage').src = drama.imageUrl;
  document.getElementById('dramaTrailerLink').href = drama.trailerUrl;

  // Show the recommendation section
  document.getElementById('recommendation').style.display = 'block';
}
