
// Delete Post
const handlePostDeletion = async (event) => {
    event.preventDefault();
    const postId = event.target.dataset.postId;  
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        window.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      alert('ERROR. Please try again.');
    }
  };
  
  // listen
  document.querySelectorAll('.delete-post-button').forEach((button) => {
    button.addEventListener('click', handlePostDeletion);
  });