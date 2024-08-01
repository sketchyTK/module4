//const blogPostCollection = [];

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const lightSwitch = document.querySelector('#toggle');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
lightSwitch.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    document.body.setAttribute('class', 'light');
    localStorage.setItem('switch', mode);
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    document.body.setAttribute('class', 'dark');
    localStorage.setItem('switch', mode);
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  let savedPosts = JSON.parse(localStorage.getItem('blog'));
 // console.log('blog post data read');
  return savedPosts || [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(dataIndex) {
    const blogArray = readLocalStorage();
  blogArray.push(dataIndex);
  localStorage.setItem('blog', JSON.stringify(blogArray));
 //console.log('blog post data stored');
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

