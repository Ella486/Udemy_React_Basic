import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from './pages/Home';
//import PostPage, { loader as postLoader } from './pages/Post';
import RootLayout from './pages/Root';

const BlogPage = lazy(() => import('./pages/Blog')); //import() 는 Promise를 반환
const PostPage = lazy(() => import('./pages/Post'));

/**
 * Suspense
 * - React v18.0의 신기술
 * - 컴포넌트의 랜더링을 어떤 작업이 끝날 때까지 잠시 중단시키고
 *   다른 컴포넌트를 먼저 랜더링 할 수 있다.
 * - REST API나 GraphQL을 호출하여 네트워트를 통해 비동기로(asynchronously) 
 *   데이터를 가져오는 작업을 할 때 유용하게 쓰임.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          { 
            index: true, 
            element: 
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>, 
            loader: () => import('./pages/Blog').then((module) => module.loader()) 
          },
          { 
            path: ':id', 
            element: 
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>,
            loader: (meta) => import('./pages/Post').then((module) => module.loader(meta)) 
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
