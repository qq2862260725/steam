var express = require('express');
var app = express();
var request = require('request');


app.get('39.105.41.32/steam', function (req, res){
	res.setHeader( 'Access-Control-Allow-Origin','*');
	var url = 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=6D7A52CD3D21C352CE3AC33A2DCF1A78&steamid=76561198316519080&relationship=friend';
	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	       res.send(response);
	    }
	});
})


app.listen(3000);

console.log('Success');