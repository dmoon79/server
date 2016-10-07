var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=dmoon79&api_key=%20bc1ed8a766ce5d0c88011deeddb1fe71&format=json",
  "method": "GET"
}


$.ajax(settings).done(function(data) {
  console.log(data);

  var result = '';

  for(var i = 0; i < data.length; i++ ) {
    result += '<div>' + data.lovedtracks.track[i].artist.name + '</div>';
  };

  $('#tracklist').append(result);
  //$('#tracklist').append(data.lovedtracks.track[0]);
}).fail(function() {
  alert("failed to connect");
});
