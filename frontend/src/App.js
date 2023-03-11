// import product from './images/p1.jpg';
// import './App.css';
import  { BrowserRouter,Link,Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">amazona</a>
                </div>
                <div>
                    <Link to="/cart">Cart</Link>
                    <Link to="signin">Sign In</Link>
                </div>
            </header>
            <main>
                <Route path='/products/:id' component={ProductScreen}></Route>
                <Route exact={true} path='/' component={HomeScreen}></Route>
            </main>
            <footer className="row center">
                All rights reserved
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
