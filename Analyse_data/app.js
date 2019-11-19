var output = require("fs");
var input = require("fs");

var obj_0 = JSON.parse(input.readFileSync("D3_repo.json"));
var obj_1 = obj_0.data.D3_whole_project.D3_repo.D3_sub_repo_info

var str = "var json_data = {\"name\": \"D3\", \"children\": [";

for (var i = 0; i < obj_1.length; i++) {
    var obj_2 = obj_1[i].each_repo.issues.issues_info;
    if(obj_2.length == 0) {
        str += "{\"name\": \"" + obj_1[i].each_repo.name + "\"}";
        if(i!=obj_1.length-1) {
            str += ",";
        }
        continue;
    }

    str += "{\"name\": \"" + obj_1[i].each_repo.name + "\", \"children\": [";

    for (var j = 0; j < obj_2.length; j++) {
        str += "{\"name\": \"last_issue_" + j + "\", \"children\": [";
        str += "{\"name\": \"author:" + obj_2[j].each_issue.author.login + "\"},";        
        str += "{\"name\": \"state:" + obj_2[j].each_issue.state + "\"},";   
        str += "{\"name\": \"locked:" + obj_2[j].each_issue.locked+ "\"},";
        str += "{\"name\": \"number:" + obj_2[j].each_issue.number+ "\"}";
        str += "]}"
        if(j!=obj_2.length-1) {
            str += ",";
        }
    }

    str += "]}";
    if(i!=obj_1.length-1) {
        str += ",";
    }
}

str += "]}";

output.writeFile('output_JSON.js', str,  function(err) {
    if (err) {
        return console.error(err);
    }
 });