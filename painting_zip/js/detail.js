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
  