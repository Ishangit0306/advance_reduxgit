import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import AddProduct from './components/Shop/Addproduct';
import Products from './components/Shop/Products';

function App() {

  const toggle=useSelector(state=>state.toggleCart.showCart);
  
  return (
    <Layout>
     { toggle &&<Cart />}
      <AddProduct />
      <Products />
    </Layout>
  );
}

export default App;
