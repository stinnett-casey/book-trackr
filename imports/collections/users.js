import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  'users.create': function(email, password){
    return Accounts.createUser({
      password,
      email
    });
  }
});

export const Users = 'Exported so that I have access to the Meteor Methods';