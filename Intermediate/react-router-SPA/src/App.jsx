import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as BlogPostsLoader } from './pages/BlogPosts';
import NewPostPage, { action as NewPostAction } from './pages/NewPost';
import PostDetailPage, {
  loader as PostDetailsLoader,
} from './pages/PostDetail';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/Error';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<WelcomePage />} />
        <Route path='/blog' element={<BlogLayout />}>
          <Route index element={<BlogPostsPage />} loader={BlogPostsLoader} />
          <Route
            path=':id'
            element={<PostDetailPage />}
            loader={PostDetailsLoader}
          />
        </Route>
        <Route
          path='/blog/new'
          element={<NewPostPage />}
          action={NewPostAction}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
