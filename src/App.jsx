import logo from '../public/vite.svg';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 11,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 12,
    name: 'Produto 1',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },

];

const App = () => {
  return (
    <div className="App">
      <header className='header-title-logo'>
        <img src={logo} alt="Logo" className="logo" />
        <span>Sublee Outleet</span>
      </header>
      <div className="products-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <span className="product-name">{product.name}</span>
            <span className="product-price">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
