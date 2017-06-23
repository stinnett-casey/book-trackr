import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/App';
import { Books } from '../imports/collections/books';
import { UserBooks } from '../imports/collections/user-books';

Meteor.startup(() => {
  ReactDOM.render(
    <App />, 
    document.getElementById('app')
  );
});