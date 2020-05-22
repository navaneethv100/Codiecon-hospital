import React, { Component,setGlobal ,useGlobal} from 'reactn';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div className='app-container'>
                <NavBar/>
                <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/signin' component={SignIn} />
               </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
