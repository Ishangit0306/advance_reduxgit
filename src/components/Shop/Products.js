import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMYITEM = [
    {
      id: "p1",
      title: "testing",
      price: 60,
      description: "lets test",
    },
    {
      id: "p2",
      title: "testing twice",
      price: 50,
      description: "lets test again",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      <ul>
        {DUMMYITEM.map((product)=><ProductItem key ={product.id }id={product.id}title={product.title} price={product.price} description={product.description}/>)}
      </ul>
    </section>
  );
};
export default Products;
