import React, { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

import Posts from '../components/Posts';
import { getPosts, getSlowPosts } from '../util/api';

function BlogPostsPage() {
  const postsData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={postsData.posts}
          errorElement={<p>Somthing went wrong</p>}
        >
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  // return getPosts();
  return defer({ posts: getSlowPosts() });
}
