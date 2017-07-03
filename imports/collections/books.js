import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.methods({
    'getBooksByCategory': function(){
      newObject = {};
      Books.find({}).fetch().forEach(book => {
        if (!newObject[book.category]) {
          newObject[book.category] = [];
        }
        newObject[book.category].push(book);
      });
      return newObject;
    }
  });
}

export const Books = new Mongo.Collection('books');