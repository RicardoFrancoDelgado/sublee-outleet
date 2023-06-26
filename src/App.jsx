import logo from '../public/logo.png'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 'R$35',
    image: 'https://i.imgur.com/NZXqeOc.png',
    link: 'https://www.subleestore.com/produtos/caneca-outlet-splash-areia-gaara/'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 'R$45',
    image: 'https://i.imgur.com/eKK5w3t.png',
    link: 'https://www.subleestore.com/produtos/caneca-ceramica-padrinho-e-madrinha/'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 'R$35',
    image: 'https://i.imgur.com/u0JT4AB.png',
    link: 'https://www.subleestore.com/produtos/caneca-outlet-stitch-e-angel/'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 'R$35',
    image: 'https://i.imgur.com/4VkxZlH.png',
    link: 'https://www.subleestore.com/produtos/caneca-outlet-alca-dourada-principe-ouro-negro/'
  },
  {
    id: 5,
    name: 'Produto 5',
    price: '$10',
    image: 'https://i.imgur.com/RUmZ3EY.png',
    link: '#'
  },
  {
    id: 6,
    name: 'Produto 6',
    price: '$10',
    image: 'https://i.imgur.com/RUmZ3EY.png',
    link: '#'
  },
  {
    id: 7,
    name: 'Produto 7',
    price: '$10',
    image: 'https://i.imgur.com/RUmZ3EY.png',
    link: '#'
  },
  {
    id: 8,
    name: 'Produto 8',
    price: '$10',
    image: 'https://i.imgur.com/RUmZ3EY.png',
    link: '#'
  },
  {
    id: 9,
    name: 'Produto 9',
    price: '$10',
    image: 'https://i.imgur.com/RUmZ3EY.png',
    link: '#'
  },
  {
    id: 10,
    name: 'Produto 10',
    price: '$10',
    image: 'https://i.imgur.com/RUmZ3EY.png',
    link: '#'
  },
  {
    id: 11,
    name: 'Produto 11',
    price: '$10',
    image: 'https://i.imgur.com/RUmZ3EY.png',
    link: '#'
  },
  {
    id: 12,
    name: 'Produto 12',
    price: '$10',
    image: 'https://i.imgur.com/RUmZ3EY.png',
    link: '#'
  }
]

const App = () => {
  return (
    <div className="App">
      <header className="header-title-logo">
        <a href="https://subleestore.lojavirtualnuvem.com.br/" target="_blank" className="App-logo">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <span className="App-title">Disponivel para retirada</span>
      </header>
      <div className="products-container">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <a href={product.link} target="blank">
              <span className="product-name">{product.name}</span>
            </a>
            <span className="product-price">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
