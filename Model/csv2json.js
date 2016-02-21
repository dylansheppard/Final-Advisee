var fs = require('fs');
console.log("???");
var advisees = new Array();
var http = require('http');

var server = http.createServer(function(request, response) {
		response.writeHead(200, {"Conent-Type": "text/plain"});
		

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

			}
		writeJSON(JSON.stringify(advisees)); //once loop is finished, pass advisees to file write func
		response.end(JSON.stringify(advisees));
		});
		});//end of server func

	server.listen(8000);
	function writeJSON(content) {
		var writer = fs.createWriteStream('students.json');
		writer.write("\"students\": \n");

		writer.write("[ \n");
		writer.write(content);
		writer.write("]");
		writer.end();	

}
		console.log("BS" + advisees);
		var data = JSON.stringify(advisees);
		fs.writeFile("test.json", "DIE BITCH", function(err) {
	 		 
		if (err) {
				return console.error(err);	
			}

		
			console.log("Some data " + data.toString());
			});
		
	

				
			
