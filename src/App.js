import React from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './component/Contact/Contacts';
import Header from './component/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './component/Contact/AddContact';
import { Provider } from './component/context';
import './App.css';
import About from './component/pages/About'
import NotFoundPage from './component/pages/NotFoundPage';
import EditContact from './component/Contact/EditContact';

function App() {
  return (
    <Provider>
      <Router>
    <div className="App">
      <Header branding="Contact Manager"/>
      <div className="container">
        <Switch>
        <Route exact path="/" component={Contacts}/>
          <Route exact path="/contact/add" component={AddContact}/>
          <Route exact path="/contact/edit/:id" component={EditContact}/>
          <Route exact path="/about" component={About}/>
          <Route component={NotFoundPage}/>
        </Switch>
        </div>
      
    </div>
    </Router>
    </Provider>
  );
}
export default App;
