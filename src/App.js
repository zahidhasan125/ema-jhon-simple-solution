import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './firebase/routes/RequireAuth';
import Main from './layouts/Main';
import { productAndCartLoader } from './loaders/productAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async()=> fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'shop',
          loader: async()=> fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <RequireAuth><Inventory></Inventory></RequireAuth>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'shipping',
          element: <RequireAuth><Shipping></Shipping></RequireAuth>
        }
      ],
      errorElement: <div>Sorry 404</div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
