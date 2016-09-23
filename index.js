const 
	http = require("http"),
	data = [{
	  "text": "Fetched Data 1",
	  "icon": "bookmark"
	},{
	  "text": "Fetched Data 2",
	  "text1": "This data was fetched from the server"
	},{
	  "text": "Fetched Data 3"
	}];


const server = http.createServer((request, response) => {
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(data));
});

server.listen(3000);
