'use strict';

module.exports = function (fortuneApp) {
  fortuneApp.resource('comment', {
    body: String,
    post: "post"
  });
}
