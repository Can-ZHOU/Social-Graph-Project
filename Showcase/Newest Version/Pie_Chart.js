
var chart = c3.generate({
    bindto: '#chart_d',
    data: {
        json: json_data_forkCount,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    pie: {
        label: {
            format: function (value, ratio, id) {
                return d3.format('')(value);
            }
        }
    }
});

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart_d',
        data: {
            json: json_data_diskUsage,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        pie: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        }
    });
}, 1000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart_d',
        data: {
            json: json_data_star,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        pie: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        }
    });
}, 2000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart_d',
        data: {
            json: year_p,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        }
    });
}, 3000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart_d',
        data: {
            json: month_p,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        }
    });
}, 4000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart_d',
        data: {
            json: json_data_forkCount,
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        }
    });
}, 5000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart_d',
        data: {
            json: json_data_diskUsage,
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        }
    });
}, 6000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart_d',
        data: {
            json: json_data_star,
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        }
    });
}, 7000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart_d',
        data: {
            json: year_p,
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        }
    });
}, 8000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart_d',
        data: {
            json: month_p,
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        }
    });
}, 9000);

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
}, 1000);

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
}, 2000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: year_p,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 3000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: month_p,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 4000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: json_data_forkCount,
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 5000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: json_data_diskUsage,
            type : 'donut',
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
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 7000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: year_p,
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 8000);

setTimeout(function () {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            json: month_p,
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}, 9000);

var chart_0 = c3.generate({
    bindto: '#chart_0',
    data: {
        json: json_data_forkCount,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    pie: {
        label: {
            format: function (value, ratio, id) {
                return d3.format('')(value);
            }
        }
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
    },
    pie: {
        label: {
            format: function (value, ratio, id) {
                return d3.format('')(value);
            }
        }
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
    },
    pie: {
        label: {
            format: function (value, ratio, id) {
                return d3.format('')(value);
            }
        }
    }
});

var chart_0 = c3.generate({
    bindto: '#chart_0_2',
    data: {
        json: json_data_forkCount,
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var chart_1 = c3.generate({
    bindto: '#chart_1_2',
    data: {
        json: json_data_diskUsage,
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var chart_2 = c3.generate({
    bindto: '#chart_2_2',
    data: {
        json: json_data_star,
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

