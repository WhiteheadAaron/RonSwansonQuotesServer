'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


function dbConnect(url = `mongodb+srv://aaron:hello@cluster0-a2ktp.mongodb.net/test?retryWrites=true`) {
  return mongoose.connect(url)
    .catch(err => {
      console.error('Mongoose failed to connect');
      console.error(err);
    });
}

function dbDisconnect() {
  return mongoose.disconnect();
}

function dbGet() {
  return mongoose;
}

module.exports = {
  dbConnect,
  dbDisconnect,
  dbGet
};
