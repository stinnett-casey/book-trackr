import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/App';
import { Books } from '../imports/collections/books';
import { Users } from '../imports/collections/users';

Meteor.startup(() => {
  ReactDOM.render(
    <App />, 
    document.getElementById('app')
  );
});