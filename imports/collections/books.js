import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.methods({
    
  });
}

export const Books = new Mongo.Collection('books');