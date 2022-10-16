import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './componants/About/About';
import Inventory from './componants/Inventory/Inventory';
import Order from './componants/Order/Order';
import Shop from './componants/Shop/Shop';
import Main from './Layout/Main';
import { ProductsAndCart } from './Loader/ProductsAndCart';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: ProductsAndCart,
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
