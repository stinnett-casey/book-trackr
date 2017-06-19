import { Meteor } from 'meteor/meteor';
import Books from '../imports/collections/books';
import { Users } from '../imports/collections/users';

Meteor.startup(() => {
  Meteor.publish('books');
});
