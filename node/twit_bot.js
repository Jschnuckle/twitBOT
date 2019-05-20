var Twit = require ( 'twit' );
var config = require( './config' );

console.log("Twitter BOT is running.");

var T = new Twit( config )
var params = { }

var Bot = module.exports = function(config) { 
  this.twit = new Twit(config);
};

var stream = T.stream('user');

// stream.on('mention', mentioned);

//FIND followers
//  Return list of user IDs that follow @JSchnucks
    console.log('Finding followers of JSchnucks')
    params = { 
        screen_name: 'JSchnucks'
      }
    T.get('followers/ids', params,  function (err,data,response){
        console.log(data)
    } )

//SEARCH:
//  Search for 2 tweets that mention 'GOT'
//  Look into Twitter API documentation for info 
//  on search param options
//  Since May 19th, 2019

function getData ( err, data, response ) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++){

      console.log('\n' + i + '.) ' + '\t' + tweets[i].text);
  }
}

console.log('\n Finding Tweets about GOT')
params = {
  q: '#TheFinalEpisode since:2019-05-19',
  count: 10
}
T.get('search/tweets', params, getData );

  
//TWEET: 
//  Use post() --> This will be key function for twit_BOT side of 
//  the generative haiku machine
//  T.post('statuses/update', {status: 'Hello World!'}, 
//   function(err,data,response){console.log(data)} )


// setInterval(postTweet(),1000*60*60);

function postTweet(tweetTxt) {
  var tweet = {
    status: tweetTxt
  }
  function tweeting (err, data, response) {
    if (err) {
      console.log('Something went wrong:/');
    }else{
      console.log('Tweeted posted!');
    }
    console.log(data);
  }
  T.post('statuses/update', tweet, tweeting);
}

