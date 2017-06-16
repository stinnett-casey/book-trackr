import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/App';
import { Books } from '../imports/collections/books';

Meteor.startup(() => {
  ReactDOM.render(
    <App />, 
    document.getElementById('app')
  );
});