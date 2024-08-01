// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backButton = document.querySelector('#back');
// TODO: Create a function that builds an element and appends it to the DOM

    // Get stored blog post from localStorage
readLocalStorage();

    // TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    let postTest = JSON.parse(localStorage.getItem('blog'));
    if (postTest === null) {
        main.textContent = `No Blog posts yet...`;
        //main.appendChild(textContent);
    }
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    main.innerHTML = '';
    const blogArray = readLocalStorage();
//main.textContent = blogArray.length;
    for (let i = 0; i < blogArray.length; i++) {
        const newBlogPost = blogArray[i];
        if (newBlogPost !== null) {
      //  document.getElementById('username').innerHTML = blogPostStorage.username;
      //  document.getElementById('title').innerHTML = blogPostStorage.title;
      //  document.getElementById('content').innerHTML = blogPostStorage.content;
        const article = document.createElement('article');
        main.appendChild(article);
        console.log('article added');
        
        const blogTitle = document.createElement('h2');
            blogTitle.textContent = newBlogPost.title;
        article.appendChild(blogTitle);
        
        const blogContent = document.createElement('blockquote');
            blogContent.textContent = newBlogPost.content;
        article.appendChild(blogContent);

        const authorContent = document.createElement('p');
            authorContent.textContent = `Posted by ` + newBlogPost.username;
      //  article.appendChild(`Posted by $(authorContent)`);
        article.appendChild(authorContent);
          //  localStorage.clear();
    }
    else {
        noPosts();
        console.log('no posts');
        }    
  }
    return;
}
renderBlogList();

// TODO: Call the `renderBlogList` function
function goHome() {
    redirectPage('index.html');
}
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', goHome); 
