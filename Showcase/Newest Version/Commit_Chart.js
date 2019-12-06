
var chart = c3.generate({
    bindto: '#chart_c',
    data: {
        json: year,
        type : 'bar',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['2016', '2017', '2018', '2019']
        }
    }
});

var chart = c3.generate({
    bindto: '#chart_0_c',
    data: {
        json: year_p,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var chart = c3.generate({
    bindto: '#chart_1_c',
    data: {
        json: month,
        type : 'line',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG','SEP', 'OCT', 'NOV', 'DEC']
        }
    }
});

var chart = c3.generate({
    bindto: '#chart_2_c',
    data: {
        json: month_p,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});