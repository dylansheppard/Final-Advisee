var fs = require('fs');

var express = require('express');
var app = express();
var advisees = new Array();
var http = require('http');

var cors = require('cors');

 
app.use(cors());
getJSON();
function getJSON() {
	fs.readFile('grades.csv', function(err,data) {
			if (err) {
				return console.error(err);
			}
		
			console.log(data.toString());
			var lines = data.toString().split('\n'); //split each new line
			var numOfStudents = lines.length - 1;
			var fields = lines[0].split(','); //split first line by each comma, these are our parameters
			console.log(fields.toString());

			console.log("L = " + numOfStudents);
			for (var i = 1; i < numOfStudents+1; i++) {
				var currLine = lines[i].split(',');

  				console.log(currLine[0]);
				advisees.push( {
					"lastName": currLine[0],
					"firstName": currLine[1],
					
					"classes":
					[
						{"grade":currLine[2], "comment": ""},
						{"grade":currLine[3], "comment": ""},
						{"grade":currLine[4], "comment": ""},
						 {"grade":currLine[5], "comment": ""},
                                                {"grade":currLine[6], "comment": ""},
                                                {"grade":currLine[7], "comment": ""},

						 {"grade":currLine[8], "comment": ""},
                                                {"grade":currLine[9], "comment": ""},
                                                {"grade":currLine[10], "comment": ""},
  						 {"grade":currLine[11], "comment": ""},
                                                {"grade":currLine[12], "comment": ""},
                                                {"grade":currLine[13], "comment": ""},
 						  {"grade":currLine[14], "comment": ""},
                                                {"grade":currLine[15], "comment": ""},
                                                {"grade":currLine[16], "comment": ""},
 						  {"grade":currLine[17], "comment": ""},
                                                {"grade":currLine[18], "comment": ""},
                                          	{"grade":currLine[19], "comment": ""}
						  ]
				});
				
				advisees.push("\n"); 

			}
			
			return JSON.stringify(advisees);
});

}


app.get('/students.json',cors(), function (req, res) {
  res.sendFile("/things/students.json", function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.listen(8000, function(){
  console.log('CORS-enabled web server listening on port 8000');
});


	
	function writeJSON(content) {
		var writer = fs.createWriteStream('students.json');
		writer.write("\"students\": \n");

		writer.write("[ \n");
		writer.write(content);
		writer.write("]");
		writer.end();	

}
		
	

				
			
