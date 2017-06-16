import { Meteor } from 'meteor/meteor';
import Booms from '../imports/collections/books';

Meteor.startup(() => {
  Meteor.publish('books');
});
