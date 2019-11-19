var output = require("fs");
var input = require("fs");

var obj_0 = JSON.parse(input.readFileSync("D3_repo.json"));
var obj_1 = obj_0.data.D3_whole_project.D3_repo.D3_sub_repo_info

var a = "var data = {\"name\": \"D3\", \"children\": [";

for (var i = 0; i < obj_1.length; i++) {
    a += "{\"name\": \"" + obj_1[i].each_repo.name + "\"}";
    if(i!=obj_1.length-1) {
        a += ",";
    }
}

a += "]};";
output.writeFile('output.js', a,  function(err) {
    if (err) {
        return console.error(err);
    }
 });