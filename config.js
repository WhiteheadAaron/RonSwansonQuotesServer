"use strict";

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "https://ron-swanson-quotes-client.herokuapp.com",
  DATABASE_URL: "mongodb+srv://aaron:hello@cluster0-a2ktp.mongodb.net/test?retryWrites=true",
  DATABASE_NAME: process.env.DATABASE_NAME || "oforce",
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL || "mongodb://localhost/thinkful-backend-test"
};
