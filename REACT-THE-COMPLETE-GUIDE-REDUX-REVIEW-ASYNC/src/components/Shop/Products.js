import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    descrption: 'The first book I ever wrote'
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    descrption: 'The Second book I ever wrote'
  },
  {
    id: 'p3',
    price: 4,
    title: 'My 3rd Book',
    descrption: 'The 3rd book I ever wrote'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => 
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.descrption}
          />
        )}
        
      </ul>
    </section>
  );
};

export default Products;
