$(document).ready(function() {
  var maxHeight = 0;
   $('.box__caption').each(function(){
     if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
   });
  $('.box__caption').height(maxHeight);


  fetch('https://cdn.rawgit.com/kylezinter/a75e2d1a5a115ae364db8f19b8456e9e/raw/d9f8eef6e8ae3b90d3d5e89b5f2f5793e625fb95/FeatureJson.json', {
  	method: 'get'
  }).then(function(response) {
    return response.json();
  }).then(function(data){
    console.log(data);
    var product = '';
    var count = data.length;
    for( var i=0; i < count; i++ ){
      var match = data[i].audience;
      if(match == "HOME"){
        product += match;
      }
    }
    console.log(product);
  })
  .catch(function(err) {
  	// Error :(
  });
});
