import { Meteor } from 'meteor/meteor';
import { Books } from '../imports/collections/books';
import { UserBooks } from '../imports/collections/user-books';

Meteor.startup(() => {
  Meteor.publish('user-books', function() {
    return UserBooks.find({userId: this.userId});
  });
  Meteor.publish('books', function() {
    return Books.find({});
  });
});
