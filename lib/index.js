var express         = require('express');
var fs              = require( 'fs' );
var curl            = require( 'curlrequest' );
var cheerio         = require( 'cheerio' );
var commandLineArgs = require('command-line-args')

var optionDefinitions = [
  { name: 'url', type: String },
  { name: 'dompos', type: String },
  { name: 'include', type: String }
]
var options = commandLineArgs( optionDefinitions );

const PORT=80; 

var server = express();

server.get('/', function handleRequest( request, response ) {

	curl.request( options.url, function ( err, html ) {

		var $ = cheerio.load( html );

		$( options.dompos ).append( fs.readFileSync( options.include ).toString('utf8') );

	    response.end( $.html() );

	});

});

server.use( '/', express.static( '.' ) );

server.listen( PORT, function() {

    console.log( "Server started, go to: http://0.0.0.0:%s", PORT );

});