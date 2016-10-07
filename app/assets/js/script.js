// var settings = {
//   "crossDomain": true,
//   "url": "http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=dmoon79&api_key=%20bc1ed8a766ce5d0c88011deeddb1fe71&format=json",
//   "method": "GET"
// }


// $.ajax(settings).done(function(data) {
//   console.log(data);
//
//   var result = '';
//
//   for(var i = 0; i < data.length; i++ ) {
//     result += '<div>' + data.lovedtracks.track[i].artist.name + '</div>';
//   };
//
//   $('#tracklist').append(result);
//   //$('#tracklist').append(data.lovedtracks.track[0]);
// }).fail(function() {
//   alert("failed to connect");
// });

fetch('http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=dmoon79&api_key=%20bc1ed8a766ce5d0c88011deeddb1fe71&format=json').then(function(response) {
	// Convert to JSON
	return response.json();
}).then(function(j) {
	// Yay, `j` is a JavaScript object
	console.log(j);
  var result = '';
  var count = Object.keys(j.lovedtracks.track).length;
  for(var i = 0; i < count; i++ ) {
      result += '<div class="artist">'
      result += '<div class="artist__name">' + j.lovedtracks.track[i].artist.name + '</div>';
      result += '<div class="artist__mbid">' + j.lovedtracks.track[i].artist.mbid + '</div>';
      // result += '<img src="' + j.lovedtracks.track[.image[0].['#text'] +'">';
      result += '</div>'
  };
  $('#tracklist').append(result);
});
