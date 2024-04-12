document.getElementById('imageInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      displayImage(imageUrl);
      saveImageToLocalStorage(imageUrl);
    }
    
    reader.readAsDataURL(file);
  }
});

function displayImage(imageUrl) {
  document.getElementById('uploadedImage').src = imageUrl;
}

function saveImageToLocalStorage(imageUrl) {
  let images = JSON.parse(localStorage.getItem('uploadedImages')) || [];
  images.push(imageUrl);
  localStorage.setItem('uploadedImages', JSON.stringify(images));
}
