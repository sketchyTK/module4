// TODO: Create a variable that selects the form element
const submitEl = document.querySelector('#submit');
const nameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

const blogPost = function (event) {
  
    event.preventDefault();
     const saveName = nameInput.value.trim();
     const saveTitle = titleInput.value.trim();
     const saveContent = contentInput.value.trim();
  
  if (!saveName || !saveTitle || !saveContent ) {
    const errorMsg = document.querySelector('#error');
    errorMsg.textContent = `Form field cannot be left blank`;
    setTimeout(function () {
      errorMsg.textContent = '';
    }, 3000);
    return;
  } 
  var blogPost = { 
    username: saveName, 
    title: saveTitle, 
    content: saveContent, 
  };
  storeLocalStorage(blogPost);
    redirectPage('blog.html');

};


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitEl.addEventListener('click', blogPost);