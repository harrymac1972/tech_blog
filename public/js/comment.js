// extract post ID
const getPostIdFromUrl = () => {
    const urlParts = window.location.toString().split("/");
    return urlParts[urlParts.length - 1];
  };
  
  // Function to handle comment form submission
  const handleCommentForm = async (event) => {
    event.preventDefault();
    const commentText = document.querySelector('#comment').value.trim();
    const postId = getPostIdFromUrl();  
    // confirm data
    if (commentText && postId) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id: postId, comment_text: commentText }),
        headers: { 'Content-Type': 'application/json' },
      });  
      // confirm response
      if (response.ok) {
        window.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // listen
  document
    .querySelector('#comment-form')
    .addEventListener('submit', handleCommentForm);