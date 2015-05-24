'use strict';

module.exports = function (fortuneApp) {
  fortuneApp.resource('person', {
    name: String,
    email: String
  });
}
