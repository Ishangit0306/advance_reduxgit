import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import AddProduct from './components/Shop/Addproduct';
import Products from './components/Shop/Products';

function App() {
  const addProductHandler=(title,price,description)=>{
console.log(title);
  }
  return (
    <Layout>
      <Cart />
      <AddProduct onAddProduct={addProductHandler}/>
      <Products />
    </Layout>
  );
}

export default App;
