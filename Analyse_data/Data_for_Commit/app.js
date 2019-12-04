var output = require("fs");
var input = require("fs");

var obj_0 = JSON.parse(input.readFileSync("D3_data_3.json"));
var obj_1 = obj_0.data.D3_whole_project.D3_repo.D3_sub_repo_info[0].each_repo.object;

var y_2016 = 0;
var y_2017 = 0;
var y_2018 = 0;
var y_2019 = 0;

var m_1 = 0;
var m_2 = 0;
var m_3 = 0;
var m_4 = 0;
var m_5 = 0;
var m_6 = 0;
var m_7 = 0;
var m_8 = 0;
var m_9 = 0;
var m_10 = 0;
var m_11 = 0;
var m_12 = 0;

var obj_2 = obj_1.first100.edges;
for (var i = 0; i < 100; i++) {
    var obj_3 = obj_2[i].node.committedDate;
    var y = obj_3.slice(0,4);
    switch (y) {
        case "2016":
            y_2016++;
            break;

        case "2017":
            y_2017++;
            break;

        case "2018":
            y_2018++;
            break;

        case "2019":
            y_2019++;
            break;

        default:
            break;
    }
    var m = obj_3.slice(5,7);
    switch (m) {
        case "01":
            m_1++;
            break;
        case "02":
            m_2++;
            break;
        case "03":
            m_3++;
            break;
        case "04":
            m_4++;
            break;
        case "05":
            m_5++;
            break;
        case "06":
            m_6++;
            break;
        case "07":
            m_7++;
            break;
        case "08":
            m_8++;
            break;
        case "09":
            m_9++;
            break;
        case "10":
            m_10++;
            break;
        case "11":
            m_11++;
            break;
        case "12":
            m_12++;
            break;
        default:
            break;
    }
}

obj_2 = obj_1.second100.edges;
for (var i = 0; i < 100; i++) {
    var obj_3 = obj_2[i].node.committedDate;
    var y = obj_3.slice(0,4);
    switch (y) {
        case "2016":
            y_2016++;
            break;

        case "2017":
            y_2017++;
            break;

        case "2018":
            y_2018++;
            break;

        case "2019":
            y_2019++;
            break;

        default:
            break;
    }
    var m = obj_3.slice(5,7);
    switch (m) {
        case "01":
            m_1++;
            break;
        case "02":
            m_2++;
            break;
        case "03":
            m_3++;
            break;
        case "04":
            m_4++;
            break;
        case "05":
            m_5++;
            break;
        case "06":
            m_6++;
            break;
        case "07":
            m_7++;
            break;
        case "08":
            m_8++;
            break;
        case "09":
            m_9++;
            break;
        case "10":
            m_10++;
            break;
        case "11":
            m_11++;
            break;
        case "12":
            m_12++;
            break;
        default:
            break;
    }
}

var obj_2 = obj_1.third100.edges;
for (var i = 0; i < 100; i++) {
    var obj_3 = obj_2[i].node.committedDate;
    var y = obj_3.slice(0,4);
    switch (y) {
        case "2016":
            y_2016++;
            break;

        case "2017":
            y_2017++;
            break;

        case "2018":
            y_2018++;
            break;

        case "2019":
            y_2019++;
            break;

        default:
            break;
    }
    var m = obj_3.slice(5,7);
    switch (m) {
        case "01":
            m_1++;
            break;
        case "02":
            m_2++;
            break;
        case "03":
            m_3++;
            break;
        case "04":
            m_4++;
            break;
        case "05":
            m_5++;
            break;
        case "06":
            m_6++;
            break;
        case "07":
            m_7++;
            break;
        case "08":
            m_8++;
            break;
        case "09":
            m_9++;
            break;
        case "10":
            m_10++;
            break;
        case "11":
            m_11++;
            break;
        case "12":
            m_12++;
            break;
        default:
            break;
    }
}

var str = "var year_p = {\"2016\": " + y_2016 + ", \"2017\": " + y_2017 + ", \"2018\": " + y_2018 + ", \"2019\": " + y_2019 + "};\n";
str += "var month_p = {\"JAN\": " + m_1 + ", \"FEB\": " + m_2 + ", \"MAR\": " + m_3 + ", \"APR\": " + m_4 + ", \"MAY\": " + m_5 + ", \"JUN\": " + m_6 + ", \"JUL\": " + m_7 + ", \"AUG\": " + m_8 + ", \"SEP\": " + m_9 + ", \"OCT\": " + m_10 + ", \"NOV\": " + m_11 + ", \"DEC\": " + m_12 +"};\n";

str += "var year = {'Commit Number': [" + y_2016 + ", " + y_2017 + ", " + ", " + y_2018 + ", " + y_2019 + "]};\n";
str += "var month = {'Commit Number': [" + m_1 + ", " + m_2 + ", " + m_3 + ", " + m_4 + ", " + m_5 + ", " + m_6 + ", " + m_7 + ", " + m_8 + ", " + m_9 + ", " + m_10 + ", " + m_11 + ", " + m_12 + "]};\n";

output.writeFile('Commit_JSON.js', str,  function(err) {
     if (err) {
         return console.error(err);
     }
});