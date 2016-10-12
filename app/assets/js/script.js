// fetch('http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=dmoon79&api_key=%20bc1ed8a766ce5d0c88011deeddb1fe71&format=json').then(function(response) {
// 	// Convert to JSON
// 	return response.json();
// }).then(function(j) {
// 	// Yay, `j` is a JavaScript object
// 	console.log(j);
//   var result = '';
//   var count = Object.keys(j.lovedtracks.track).length;
//   for(var i = 0; i < count; i++ ) {
//       result += '<div class="artist">'
//       result += '<div class="artist__name">' + j.lovedtracks.track[i].artist.name + '</div>';
//       result += '<div class="artist__mbid">' + j.lovedtracks.track[i].artist.mbid + '</div>';
//       // result += '<img src="' + j.lovedtracks.track[.image[0].['#text'] +'">';
//       result += '</div>'
//   };
//   $('#tracklist').append(result);
// });

var request = new Request('http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=dmoon79&api_key=%20bc1ed8a766ce5d0c88011deeddb1fe71&format=json', {
	method: 'GET',
  mode: 'cors'
});

fetch(request).then(function(response){
	// console.log(response);
	return response.json();
}).then(function(j){
	// console.log(j.lovedtracks);
	var i = 0;
	var result = "";
	//
	while(i > 0){
		result += '<p>' + j.lovedtracks.track[i].artist.name + '</p>';
		$('#tracklist').append(result);
		i++;

	}


});
