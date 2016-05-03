/*TODO
 Clean up lazy file structure
  
 
 */


var fs = require('fs');
var express = require('express');
var http = require('http');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParser.json()); //now i can parse json with ease

 CSV2JSON();


function CSV2JSON() {
	fs.readFile('grades.csv', function(err,data) {
			if (err) {
				return console.error(err);
			}
			var advisees = new Array();
		
			console.log(data.toString());
			var lines = data.toString().split('\n'); //split each new line
			var numOfStudents = lines.length - 2;
			var fields = lines[0].split(','); //split first line by each comma, these are our parameters
			console.log(fields.toString());

			console.log("L = " + numOfStudents);
			for (var i = 1; i < numOfStudents-1; i++) {
				var currLine = lines[i].split(',');
				console.log("Instance = "  + i );
				console.log(lines[i].toString());
  				//console.log("Current student = " + currLine[0] + " , " + currLine[1]);
				advisees.push( {
					"lastName": currLine[0],
					"firstName": currLine[1],
					"image": "http://lorempixel.com/100/100/people/" + (i%10 + 1),
					
					
					"classes":
					[
					   //TODO STOP PROGRMAMING LIKE THIS!
						{"name":fields[2],"grade":currLine[2],"year": "", "comment": ""},
						{"name":fields[3],"grade":currLine[3], "year": "","comment": ""},
						{"name":fields[4],"grade":currLine[4], "year": "","comment": ""},
						 {"name":fields[5],"grade":currLine[5],"year": "", "comment": ""},
                                                {"name":fields[6],"grade":currLine[6],"year": "", "comment": "" },
                                                {"name":fields[7],"grade":currLine[7],"year": "", "comment": ""},

						 {"name":fields[8],"grade":currLine[8],"year": "", "comment": ""},
                                                {"name":fields[9],"grade":currLine[9],"year": "", "comment": ""},
                                                {"name":fields[10],"grade":currLine[10],"year": "", "comment": ""},
  						 {"name":fields[11],"grade":currLine[11],"year": "", "comment": ""},
                                                {"name":fields[12],"grade":currLine[12],"year": "", "comment": ""},
                                                {"name":fields[13],"grade":currLine[13], "year": "","comment": ""},
 						  {"name":fields[14],"grade":currLine[14],"year": "", "comment": ""},
 						  
                                                {"name":fields[15],"grade":currLine[15],"year": "", "comment": ""},
                                                
                                                {"name":fields[16],"grade":currLine[16],"year": "", "comment": ""},
 						  {"name":fields[17],"grade":currLine[17], "year": "","comment": ""},
                                                {"name":fields[18],"grade":currLine[18],"year": "", "comment": ""},
                                          	{"name":fields[19],"grade":currLine[19],"year": "", "comment": ""}
						  ]
						 
				});
				
				

			}
			
			writeJSON(advisees);
});

}

function convert(data) {
	var advisees = new Array();
	console.log("Hers everything" + data.toString());
			var lines = data.toString().split('\n'); //split each new line
			var numOfStudents = lines.length;
			var fields = lines[0].split(','); //split first line by each comma, these are our parameters
			console.log("The Fields are = " + fields.toString());

			console.log("L = " + numOfStudents);
			for (var i = 1; i < numOfStudents; i++) {
				var currLine = lines[i].split(',').slice(1);
				console.log("Instance = "  + i );
				console.log(lines[i].toString());
  				//console.log("Current student = " + currLine[0] + " , " + currLine[1]);
				advisees.push( {
					"lastName": currLine[0],
					"firstName": currLine[1],
					"image": "http://lorempixel.com/100/100/people/" + (i%10 + 1),
					
					
					"classes":
					[
					   //TODO STOP PROGRMAMING LIKE THIS!
						{"name":fields[2],"grade":currLine[2],"year": "", "comment": ""},
						{"name":fields[3],"grade":currLine[3], "year": "","comment": ""},
						{"name":fields[4],"grade":currLine[4], "year": "","comment": ""},
						 {"name":fields[5],"grade":currLine[5],"year": "", "comment": ""},
                                                {"name":fields[6],"grade":currLine[6],"year": "", "comment": "" },
                                                {"name":fields[7],"grade":currLine[7],"year": "", "comment": ""},

						 {"name":fields[8],"grade":currLine[8],"year": "", "comment": ""},
                                                {"name":fields[9],"grade":currLine[9],"year": "", "comment": ""},
                                                {"name":fields[10],"grade":currLine[10],"year": "", "comment": ""},
  						 {"name":fields[11],"grade":currLine[11],"year": "", "comment": ""},
                                                {"name":fields[12],"grade":currLine[12],"year": "", "comment": ""},
                                                {"name":fields[13],"grade":currLine[13], "year": "","comment": ""},
 						  {"name":fields[14],"grade":currLine[14],"year": "", "comment": ""},
 						  
                                                {"name":fields[15],"grade":currLine[15],"year": "", "comment": ""},
                                                
                                                {"name":fields[16],"grade":currLine[16],"year": "", "comment": ""},
 						  {"name":fields[17],"grade":currLine[17], "year": "","comment": ""},
                                                {"name":fields[18],"grade":currLine[18],"year": "", "comment": ""},
                                          	{"name":fields[19],"grade":currLine[19],"year": "", "comment": ""}
						  ]
						 
				});
				
				

			}
			
			writeJSON(advisees);

}

//TODO cors needed?
app.get('/students.json',cors(), function (req, res) {
	
	res.sendFile(path.join(__dirname + '/students.json'));
	console.log("Get try : " + req.params.id);
	
  	//res.json(data);
  	
});
//TODO csv returned doesn't reflect changes made during session!
app.get('/grades.csv', cors(), function(req,res) {
	res.sendFile(path.join(__dirname + '/grades.csv'));
});

app.post('/students.json', function (req, res) {
	console.log("A WILD POST APPEARS");
	console.log("rq = " + JSON.stringify(req.body));
	
	res.send(writeJSON(req.body));
});

app.post('/newJSON.json', function (req, res) {
	convert(req.body);

		res.sendFile(path.join(__dirname + '/students.json'));
	 console.log("hey " + JSON.stringify(convert(req.body)));
	console.log("Trying to POST CSV new file");
	
});

app.listen(8000, function(){
  console.log('Listening @ 162.243.36.18:8000'); //TODO point this to that .me address
});


	
	function writeJSON(content) {
		
		fs.writeFile('students.json', JSON.stringify(content), 
			function(err) {
				if(err) {
					return console.log(err);
				}
				return JSON.stringify(content);
				console.log("writing to students.json");
			});
	
}
		
	

				
			
