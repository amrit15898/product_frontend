import logo from './logo.svg';
import { BrowserRouter ,Routes,  Route } from 'react-router-dom';
import './App.css';
import Index from './Components/Index';
import Hulk from './Components/Hulk';
import Product from './Components/Product';
import ShowProduct from './Components/ShowProduct';
import Page404 from './Components/Page404';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path='/' Component={Index}/>
       <Route path='/hulk' Component={Hulk}/>
       <Route path='/*' Component={Page404}/>
       <Route path='/product' Component={Product}/>
       <Route path='/showproduct' Component={ShowProduct}/>
       <Route path='/login/' Component={Login}/>
       </Routes>

       </BrowserRouter>
    </div>
  );
}

export default App;
