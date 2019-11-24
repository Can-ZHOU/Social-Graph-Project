
var chart = c3.generate({
    bindto: '#chart',
    data: {
        json: json_data_forkCount,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: json_data_diskUsage,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 1500);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: json_data_star,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 3000);

// Second time
setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: json_data_forkCount,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 4500);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: json_data_diskUsage,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 6000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: json_data_star,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 7500);

var chart_0 = c3.generate({
    bindto: '#chart_0',
    data: {
        json: json_data_forkCount,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var chart_1 = c3.generate({
    bindto: '#chart_1',
    data: {
        json: json_data_diskUsage,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var chart_2 = c3.generate({
    bindto: '#chart_2',
    data: {
        json: json_data_star,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});