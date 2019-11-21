var output = require("fs");
var input = require("fs");

var obj_0 = JSON.parse(input.readFileSync("D3_data_1.json"));
var obj_1 = obj_0.data.D3_whole_project.D3_repo.D3_sub_repo_info;

var str_0 = "var json_data_forkCount = {";
var str_1 = "var json_data_diskUsage = {";
var str_2 = "var json_data_star = {";

for (var i = 1; i < 6; i++) {
    var obj_2 = obj_1[i].each_repo;
    str_0 += "\"" + obj_2.name + "\": " + obj_2.forkCount;
    str_1 += "\"" + obj_2.name + "\": " + obj_2.diskUsage;
    str_2 += "\"" + obj_2.name + "\": " + obj_2.stargazers.totalCount;

    if(i!=5) {
        str_0 += ", ";
        str_1 += ", ";
        str_2 += ", ";
    }
}

str_0 += "};";
str_1 += "};";
str_2 += "};";

var str = str_0 + "\n\n" + str_1 +"\n\n" + str_2;

output.writeFile('Pie_Chart_JSON.js', str,  function(err) {
    if (err) {
        return console.error(err);
    }
 });