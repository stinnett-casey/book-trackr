import { Mongo } from 'meteor/mongo';
import { Books } from './books';

if (Meteor.isServer) {
  Meteor.methods({
    'users.makeUserBooks': userId => {
      const allBooks = Books.find({});
      allBooks.forEach(book => {
        UserBooks.insert({
          userId,
          bookId: book._id,
          own_it: false,
          times_read: 0,
          priority: null,
          favorite: false
        });
      });
    }
  });
}

export const UserBooks = new Mongo.Collection('userbooks');