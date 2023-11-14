import { 
  createBrowserRouter, 
  //createRoutesFromElements,
  RouterProvider,
  //Route
} from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

// 이건 JSX 방향으로 한거
// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routerDefinitions);


// 이건 그냥 javascript
// const router = createBrowserRouter([
//   { path: '/', element: <HomePage /> },
//   { path: '/products', element: <ProductsPage />}
// ]);


//절대경로
// const router = createBrowserRouter([
//   { 
//     path: '/', 
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: '/', element: <HomePage /> },
//       { path: '/products', element: <ProductsPage />},
//       { path: '/products/:productId', element: <ProductDetailPage />},
//       // :(콜론)은 뒤에가 역동적이라는 것을 readt-router-dom에게 알려주는 거
//     ]
//   },
// ]);

//상대경로
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path: '' => 이렇게 해도 되고 index로 설정해도 됨.  
      { path: 'products', element: <ProductsPage />},
      { path: 'products/:productId', element: <ProductDetailPage />},
      // :(콜론)은 뒤에가 역동적이라는 것을 readt-router-dom에게 알려주는 거
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
