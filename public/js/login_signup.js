const fileInput = document.querySelector('input[type="file"]');
const fileNameLabel = document.querySelector('.file-name');

fileInput.addEventListener('change', () => {
  const fileName = fileInput.files[0].name;
  fileNameLabel.textContent = fileName;
});
