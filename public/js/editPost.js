// extract post ID
const findPostID = () => {
    const urlArr = window.location.toString().split('/');
    return urlArr[urlArr.length - 1];
  };  
  // handle post editing
  const handleEditPostForm = async (event) => {
    event.preventDefault();
    const postId = findPostID();  
    // collect variables
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    // confirm values
    if (title && content) {
    try {
        const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
            'Content-Type': 'application/json',
        },
        });
        if (response.ok) {
        window.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
    } catch (error) {
        console.error('Error during post editing:', error.message);
        alert('An unexpected error occurred. Please try again.');
    }
    }
  };
  
  // listen
  document
    .querySelector('#edit-post-form')
    .addEventListener('submit', handleEditPostForm);