import React from 'react';
import Header from './Header';
import LogIn from './LogIn';
import SignUp from './SignUp';
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
            <Route exact path="/" component={LogIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/books" component={BooksTab}></Route>
            <Route path="/stats" component={StatsTab}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
