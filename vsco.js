var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://vsco-image.p.rapidapi.com/vsco',
  params: {url: 'https://vsco.co/hannahsasse/media/5f47dcb93a25ce66091cff56'},
  headers: {
    'x-rapidapi-host': 'vsco-image.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});