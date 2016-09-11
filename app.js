var config = require('./config.json');
var Twitter = require('twitter');

function DeleteAccount(api) {
  this.client = new Twitter(api);
}

DeleteAccount.prototype = {
  startStream: function() {
    var self = this;
    this.client.stream('statuses/filter', {
      'follow': '15899201'
    }, function (stream) {
      console.log('STARTING DYA STREAM .... ');
      self.stream = stream;
      stream.on('data', function (tweet) {
        // only reply to tweets _from_ user
        if (!tweet.user || tweet.user.screen_name !== 'Tanner_Johnson') return;

        self.client.post('statuses/update', {
          'in_reply_to_status_id': tweet.id_str,
          status: '.@tanner_johnson Delete your account.'
        }, function (err) {
          if (err) handleError(err);

          console.log('REPLIED TO THEIR TWEET ', tweet.text);
          console.log('');
        });
      });

      stream.on('error', self.handleError.bind(self));
      stream.on('end', self.resurrect.bind(self));
    });
  },

  resurrect: function() {
    this.stream = null
    var self = this;
    console.log('RESURRECTING STREAM');
    setTimeout(function() {
      self.startStream();
    }, 1000 * 60 * 5 ); // wait 5 minutes
  },

  handleError: function(err) {
    console.log(err);
    process.exit();
  }
}

var deleteAccount = new DeleteAccount(config.api);
deleteAccount.startStream();
