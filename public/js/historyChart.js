const historyMap = new Map(JSON.parse(document.getElementById("historyMapValues").value).sort());
const ctx = document.getElementById('historyChart');

const historyData = {
    labels: Array.from(historyMap.keys()),
    datasets: [{
        data: Array.from(historyMap.values())
    }]
}

const options = {
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

const historyChart = new Chart(ctx, {
    type: 'line',
    data: historyData,
    options
});
