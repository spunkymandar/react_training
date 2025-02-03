import { useState, useEffect } from 'react';

import BlogPosts from './components/BlogPosts.jsx';
import NewPost from './components/NewPost.jsx';
import blogLogoImg from './blog-logo.jpg';
import Emailform from './components/EmailForm.js';

function App() {
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(function () {
    async function loadPosts() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );

      const blogPosts = await response.json();
      setLoadedPosts(blogPosts);
    }

    loadPosts();
  }, []);

  return (
    <>
      <header>
        <Emailform></Emailform>
        <img src={blogLogoImg} from="Pen & paper" />
        <h1>
          My <em>Effectful</em> Blog
        </h1>
      </header>
      <NewPost />
      <BlogPosts posts={loadedPosts} />
    </>
  );
}

export default App;