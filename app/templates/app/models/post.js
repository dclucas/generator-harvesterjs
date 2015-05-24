'use strict';

module.exports = function (fortuneApp) {
  fortuneApp.resource('post', {
    title: String,
    author: 'person'
  });
}
