var historyMap = new Map(JSON.parse(document.getElementById("historyMapValues").value));
var ctx = document.getElementById('historyChart');

console.log(Array.from(historyMap.keys()));
console.log(Array.from(historyMap.values()));

var historyData = {
    labels: Array.from(historyMap.keys()),
    datasets: [{
        data: Array.from(historyMap.values())
    }]
}

var options = {
    scales: {
        yAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Einsparungen in t CO2'
                }
            }
        ],
        xAxes: [
            {
                type: 'time',
                time: {
                    unit: 'month'
                }
            }
        ]
    },
    legend: {
        display: false
    }
}

var historyChart = new Chart(ctx, {
    type: 'line',
    data: historyData,
    options
});
