var ChartModule2 = function(series, canvas_width, canvas_height, chart_type) {
    // Create the tag:
    var canvas_tag = "<canvas width='" + canvas_width + "' height='" + canvas_height + "' ";
    canvas_tag += "style='border:1px dotted'></canvas>";
    // Append it to #elements
    var canvas = $(canvas_tag)[0];
    $("#elements").append(canvas);
    // Create the context and the drawing controller:
    var context = canvas.getContext("2d");

    var convertColorOpacity = function(hex) {

        if (hex.indexOf('#') != 0) {
            return 'rgba(0,0,0,0.1)';
        }

        hex = hex.replace('#', '');
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
        return 'rgba(' + r + ',' + g + ',' + b + ',0.1)';
    };

    // Prep the chart properties and series:
    var datasets = []
    for (var i in series) {
        var s = series[i];
        var new_series = {
            label: s.Label,
            borderColor: s.Color,
            backgroundColor: convertColorOpacity(s.Color),
            data: []
        };
        datasets.push(new_series);
    }

    var chartData = {
        labels: [],
        datasets: datasets
    };

    var chartOptions = {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true
                },
                ticks: {
                    maxTicksLimit: 11
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true
                }
            }]
        }
    };

    var chart = new Chart(context, {
        type: 'bar',
        data: {labels: [], datasets: [{label: 'Hallo', data: []}, {label: 'Hallo2', data: []}]},
        options: chartOptions
    });



    this.render = function(data) {
        data2=[6, 11.]
        type='bar'
        if type=='bar':
          var data_entry = {labels: [], datasets: [{label: 'P1', data: []},{label: 'P2', data: []},{label: 'P3', data: []},{label: 'P4', data: []},{label: 'P5', data: []},{label: 'P6', data: []},]}
        else if type=='line':
          var data_entry = chartData

        var chart = new Chart(context, {
        type: type,
        data: data_entry,
        options: chartOptions
        });

        for (i = 0; i < data.length; i++) {
          chart.data.datasets[i].data.push(data[i]);
        }
        chart.update();
        console.log('chart updated')
    };

    this.reset = function() {
        while (chart.data.labels.length) { chart.data.labels.pop(); }
        chart.data.datasets.forEach(function(dataset) {
            while (dataset.data.length) { dataset.data.pop(); }
        });
        chart.update();
    };
};


