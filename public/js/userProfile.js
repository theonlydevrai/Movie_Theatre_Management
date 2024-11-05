document.getElementById('edit-btn').addEventListener('click', function() {
  document.getElementById('profile-view').style.display = 'none';
  document.getElementById('profile-edit').style.display = 'block';
});

document.getElementById('cancel-btn').addEventListener('click', function() {
  document.getElementById('profile-edit').style.display = 'none';
  document.getElementById('profile-view').style.display = 'block';
});