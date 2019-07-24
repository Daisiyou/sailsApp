/**
 * TestAPI.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: { type: 'string', required: true },
    password: { type: 'string', required: true },
    age: { type: 'number', defaultsTo: 20, columnType: 'INT' },
    avatar: {type: 'string', defaultsTo: 'https://test.png'}
  }
};

