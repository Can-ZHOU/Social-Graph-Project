var output = require("fs");
var input = require("fs");

var obj_0 = JSON.parse(input.readFileSync("D3_data_2.json"));
var obj_1 = obj_0.data.D3_whole_project.D3_repo.D3_sub_repo_info

var str = "var json_data = {\"name\": \"D3\", \"children\": [";

for (var i = 1; i < obj_1.length; i++) {
    var obj_2 = obj_1[i].each_repo.forks.fork_e;
    var obj_3 = obj_1[i].each_repo.issues.issue_e;
    var obj_4 = obj_1[i].each_repo.stargazers.start_e;

    str += "{\"name\": \"" + obj_1[i].each_repo.name + "\", \"children\": [";

    str += "{\"name\": \"Forks\", \"children\": [";
    for (var j = 0; j < obj_2.length; j++) {
        str += "{\"name\": \"" + obj_2[j].fork_n.name.login + "\", \"size\": 1}";
        if(j!=obj_2.length-1) {
            str += ",";
        }
    }
    str += "]},";

    str += "{\"name\": \"Issues\", \"children\": [";
    for (var j = 0; j < obj_3.length; j++) {
        str += "{\"name\": \"" + obj_3[j].issue_n.name.login + "\", \"size\": 1}";
        if(j!=obj_2.length-1) {
            str += ",";
        }
    }
    str += "]},";

    str += "{\"name\": \"Stargazers\", \"children\": [";
    for (var j = 0; j < obj_4.length; j++) {
        str += "{\"name\": \"" + obj_4[j].star_n.login + "\", \"size\": 1}";
        if(j!=obj_2.length-1) {
            str += ",";
        }
    }
    str += "]}";

    str += "]}";
    if(i!=obj_1.length-1) {
        str += ",";
    }
}

str += "]}";

output.writeFile('Zoomable_Sunburst_JSON.js', str,  function(err) {
    if (err) {
        return console.error(err);
    }
 });