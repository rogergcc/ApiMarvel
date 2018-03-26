

let url = 'https://api.deezer.com/playlist/3314523926/tracks';

const songsList = [];

$.ajax({
  url: url,

  // The name of the callback parameter, as specified by the YQL service
  jsonp: "callback",

  // Tell jQuery we're expecting JSONP
  dataType: "jsonp",

  // Tell YQL what we want and that we want JSON


  // Work with the response
  success: function( response ) {
      console.log( response ); // server response
  }
});


const list = document.querySelector('#canciones');



titulo.innerHTML = "Api Deezer ";
