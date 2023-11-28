import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" component={CategoryList} />
        <Route path="/products" component={ProductList} />
        <Route path="/orders" component={OrderList} />
        <Route path="/users" component={UserList} />
      </Switch>
    </Router>
  );
}

export default App;
