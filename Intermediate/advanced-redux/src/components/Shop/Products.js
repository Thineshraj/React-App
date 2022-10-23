import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [
  {
    id: 'p1',
    title: 'First Book',
    price: 6,
    description: 'This is a first product - amazing!',
  },
  {
    id: 'p2',
    title: 'Second Book',
    price: 5,
    description: 'This is a second product',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
