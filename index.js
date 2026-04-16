// This function takes our data and builds out the list on the page
function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  
  posts.forEach(post => {
    // Create the container for each post
    const li = document.createElement('li');

    // Setting up the title and the main text body
    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    // Toss the title and text into the list item, then put that into the actual list
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Grabbing the data from the API using async/await
async function getPosts() {
  // We'll wait for the fetch to finish and then turn the response into JSON
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  // Now that we have the data, we can send it over to be displayed
  displayPosts(data);
}

// Actually run the function so the posts show up
getPosts();