var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var crypto = require('crypto');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.set('salt', Math.random()*1000);
    var shasum = crypto.createHash('sha1');
    shasum.update(this.get('password')+this.get('salt'));
    this.set('password', shasum.digest('hex'));




  }

});


module.exports = User;
