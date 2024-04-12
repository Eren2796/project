const params = new URLSearchParams(window.location.search);
const imageSrc = decodeURIComponent(params.get('imageSrc'));

// Create HTML for the chosen image details
const imageDetailsElement = `
  <div class="image-container">
    <img src="${imageSrc}" alt="Chosen Image" class="chosen-image">
  </div>
  <!-- Add other details as needed -->
`;

// Append the image details to the image-details container
const imageDetailsContainer = document.getElementById('image-details');
imageDetailsContainer.innerHTML = imageDetailsElement;

// script.js
document.querySelectorAll('.save-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const imageSrc = icon.previousElementSibling.src;
      saveImage(imageSrc);
    });
  });
  
  function saveImage(imageSrc) {
    // Send imageSrc to backend for saving
    fetch('/save-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageSrc })
    })
    .then(response => {
      if (response.ok) {
        alert('Image saved successfully!');
        window.location.href = `detail.html?imageSrc=${encodeURIComponent(imageSrc)}`; // Redirect to detail.html with imageSrc as URL parameter
      } else {
        alert('Failed to save image.');
      }
    })
    .catch(error => {
      console.error('Error saving image:', error);
    });
  }
  