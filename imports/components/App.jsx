import React from 'react';
import Header from './Header';
import BooksTab from './BooksTab';
import StatsTab from './StatsTab';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={BooksTab}></Route>
            <Route path="/stats" component={StatsTab}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
