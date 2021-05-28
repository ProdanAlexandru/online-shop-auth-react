import Header from './components/Header/Header'
import Products from './components/Main/Products/Products'
import LoginRegister from './components/LoginRegister/LoginRegister'
import Cart from './components/Main/Cart/Cart'
import ForgotPassword from './components/LoginRegister/ForgotPassword/ForgotPassword'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useState, useEffect} from 'react'
import { AuthProvider } from './contexts/AuthContext'

const productsArray = [{
  id: "1",
  image: "/assets/bicicleta.jpg",
  title: "Bicicleta",
  price: 200,
  description: "Bicicleta Offroad",
  
},{
  id: "16",
  image: "/assets/electricbike.jpg",
  title: "Electric Bike",
  price: 700,
  description: "Electric Bike with long autonomy"
},{
  id: "3",
  image: "/assets/trotineta.jpg",
  title: "Trotineta",
  price: 150,
  description: "Trotineta electrica",
},{
  id: "4",
  image: "/assets/scuter.jpg",
  title: "Scuter",
  price: 400,
  description: "Scuter electric",
},{
  id: "5",
  image: "/assets/hoverboard.jpg",
  title: "Hoverboard",
  price: 550,
  description: "Hoverboard electric"
},{
  id: "11",
  image: "/assets/blinkers.jpg",
  title: "Blinkers",
  price: 120,
  description: "Anti blinding Blinkers"
},{
  id: "12",
  image: "/assets/gloves.jpg",
  title: "Gloves",
  price: 80,
  description: "Grip Gloves"
},{
  id: "13",
  image: "/assets/suit.jpg",
  title: "Suit",
  price: 200,
  description: "Biker Suit"
},{
  id: "14",
  image: "/assets/helmet.jpg",
  title: "Helmet",
  price: 50,
  description: "Bike Helmet"
},{
  id: "15",
  image: "/assets/snowboard.jpg",
  title: "Snowboard",
  price: 700,
  description: "Professional Snowboard"
}
];

function App() {
    const [cart, setCart] = useState([]);
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
      setCartLength(cart.reduce((count, { qty }) => count + qty, 0));
    }, [cart]);
    
    const addToCartHandler = (product) => {
      const existingItem = cart.find((item)=> item.id === product.id);
      if (existingItem) {
        setCart(cart.map((cartItem)=>
          cartItem.id === product.id ? {...existingItem, qty: existingItem.qty + 1} : cartItem
        ));
      } else {
        setCart([...cart, {...product, qty: 1 }]);
      }
    }

    const removeFromCartHandler = (removed) => {
      const existingItem = cart.find((item)=> item.id === removed.id);
      if (existingItem.qty === 1) {
        setCart(cart.filter((cartItem)=> cartItem.id !== removed.id));
      } else {
        setCart(cart.map((cartItem)=>
          cartItem.id === removed.id ? {...existingItem, qty: existingItem.qty - 1} : cartItem
        ));
      }
    }

    const removeTotally = (removedItem) => {
      setCart(cart.filter((cartItem)=> cartItem.id !== removedItem.id));
    } 

  return (
    <Router>
      <AuthProvider>
        <div>
          <Switch>
            <Route exact path= "/">
              <Header cartLength={cartLength}  />
              <Products productsArray={productsArray} addToCartHandler = {addToCartHandler} />
            </Route>
            <Route exact path= "/cart">
                <Header cartLength={cartLength} />
                <Cart cart={cart} 
                    setCart={setCart}
                    removeFromCartHandler = {removeFromCartHandler} 
                    addToCartHandler = {addToCartHandler}
                    removeTotally = {removeTotally}/>
            </Route>
            <Route exact path= "/login">
              <LoginRegister />
            </Route>
            <Route exact path= "/forgot-password">
              <ForgotPassword/>
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
