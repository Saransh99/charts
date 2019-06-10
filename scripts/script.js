let popCanvas = document.getElementById("myChart");

// -------------------line chart------------------ 

// let firstDataSet = {
//     label: "Car A - Speed(kph)",
//     data: [0,10,20,40,55,12],
//     lineTension: 0.3,
//     borderColor: 'blue',
//     backgroundColor: 'transparent',
//     borderWidth: 2,
//     pointHoverBackgroundColor: 'blue',
//     pointHoverBorderColor: 'black',
//     pointBackgroundColor: 'red',
//     pointRadius: 6,
//     pointStyle: 'rectRounded',
// }

// let secondDataSet = {
//     label: "Car B - Speed(kph)",
//     data: [20,11,55,8,60,12],
//     borderColor: 'orange',
//     backgroundColor: 'transparent',
//     borderWidth: 2,
//     pointHoverBackgroundColor: 'orange',
//     pointHoverBorderColor: 'black',
//     pointBackgroundColor: 'green',
//     pointRadius: 6,
//     pointStyle: 'rectRounded',
// }

// let speedData = {
//     labels: ["0s","10s","20s","30s","40s","50s","60s"],
//     datasets: [firstDataSet, secondDataSet]
// }

// let chartOptions = {

//     legend: {
//         display: true,
//         position: 'top',
//         lables:{
//             boxWidth: 80,
//             fontColor: 'red'
//         }
//     }
// }

// let lineChart = new Chart(popCanvas, {
//     type: 'line',
//     data: speedData,
//     options: chartOptions
// });



// -----------------------bar chart


let densityData = {

    label: 'Density of Planets (kg/m3)',
    data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
    backgroundColor: [
        'rgba(0,255,255,0.2)',
        'blue',
        'pink',
        'orange',
        'magenta',
        'yellow',
        'black',
        'brown'
    ],
    borderColor: [
        'red',
        'yellow',
        'red',
        'black',
        'orange',
        'magenta',
        'white',
        'pink'
    ],
    borderWidth: 3,
    hoverBackgroundColor: 'transparent',
    hoverBorderWidth: 4
}

let planetData = {

    labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    datasets: [densityData]
}

let barChart = new Chart(popCanvas, {

    type: 'bar',
    data: planetData
});