
const handleNewPostForm = async (event) => {
    event.preventDefault();  
    // collect values
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();  
    // confirm values
    if (title && content) {
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          window.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      } catch (error) {
        console.error('Error during new post creation:', error.message);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };
  
  // listen
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', handleNewPostForm);