let popCanvas = document.getElementById("myChart");

$(document).ready(()=>{
    // ---------------- Line chart -----------------------

    $("#btn-line").click(()=>{
        let firstDataSet = {
            label: "Car A - Speed(kph)",
            data: [0,10,20,40,55,12],
            lineTension: 0.3,
            borderColor: 'blue',
            backgroundColor: 'transparent',
            borderWidth: 2,
            pointHoverBackgroundColor: 'blue',
            pointHoverBorderColor: 'black',
            pointBackgroundColor: 'red',
            pointRadius: 6,
            pointStyle: 'rectRounded',
        }
        
        let secondDataSet = {
            label: "Car B - Speed(kph)",
            data: [20,11,55,8,60,12],
            borderColor: 'orange',
            backgroundColor: 'transparent',
            borderWidth: 2,
            pointHoverBackgroundColor: 'orange',
            pointHoverBorderColor: 'black',
            pointBackgroundColor: 'green',
            pointRadius: 6,
            pointStyle: 'rectRounded',
        }
        
        let speedData = {
            labels: ["0s","10s","20s","30s","40s","50s","60s"],
            datasets: [firstDataSet, secondDataSet]
        }
        
        let chartOptions = {
        
            legend: {
                display: true,
                position: 'top',
                lables:{
                    boxWidth: 80,
                    fontColor: 'red'
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        color: 'black'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time in seconds',
                        fontColor: 'red',
                        fontSize: 30,
                        fontStyle: 'bold',
                        fontFamily: 'sans-serif',
                        padding: 6
                    }
                }
                    
                ],

                yAxes: [{
                    gridLines: {
                        display: false,
                        color: 'black'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Speed in Kmh',
                        fontColor: 'red',
                        fontSize: 30,
                        fontStyle: 'bold',
                        fontFamily: 'sans-serif'
                    }
                }]
            }
        }
        
        let lineChart = new Chart(popCanvas, {
            type: 'line',
            data: speedData,
            options: chartOptions
        });        
    });

    // ------------------  Bar Chart ------------------------------

    $("#btn-bar").click(()=>{
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
    });


    $("#btn-radar").click(()=>{
        let marksData = {
            labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
            datasets: [{
              label: "Student A",
              backgroundColor: "transparent",
              data: [65, 75, 70, 80, 60, 80],
              borderColor: 'red',
              pointRadius: 6,
              pointBackgroundColor: 'yellow',
              pointBorderWidth: 2,
              pointHoverRadius: 10,
              fill: false,
              pointStyle: 'rect'
            }, 
            {
              label: "Student B",
              backgroundColor: "transparent",
              data: [54, 65, 60, 70, 70, 75],
              borderColor: 'blue',
              pointRadius: 6,
              pointBackgroundColor: 'green',
              pointBorderWidth: 2,
              pointHoverRadius: 10,
              fill: false,
              pointStyle: 'rect'

            }]
          };
           
          let chartOptions = {
            scale: {
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 20
                },
                pointLabels: {
                    fontSize: 15
                }
            },

            legend: {
                position: 'top',
                labels: {
                    fontColor: 'black',
                    fontSize: 20,
                    fontFamily: 'sans-serif'
                }
            },

            title: {
                display: true,
                text: 'Students Marks',
                fontSize: 26
            },

            tooltips: {
                backgroundColor: 'red',
                bodySpacing: 6,
                titleFontFamily: 'sans-serif',
                titleFontSize: 22,
                titleFontStyle: 'bold',
                titleFontColor: 'white',
                titleSpacing: 6,
                bodyFontFamily: 'Arial',
                bodyFontSize: 18,
                bodyFontColor: 'white',
                caretPadding: 9,
                caretSize: 8,
                cornerRadius: 6,
                borderColor: 'black',
                borderWidth: 1,
                xPadding: 10,
                yPadding: 10
            },

            scale: {
                gridLines: {
                    color: 'black',
                    lineWidth: 2
                },

                pointLabels: {
                    fontSize: 16,
                    fontColor: 'green',
                    fontStyle: 'bold'
                },

                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 20
                }
            }
          }

          let radarChart = new Chart(popCanvas, {
            type: 'radar',
            data: marksData,
            options: chartOptions
          });
    });



    // -------------- Pie Chart -------

    $("#btn-pie").click(()=>{

        let votesData = {
            labels: [
                "Saudi Arabia",
                "Russia",
                "Iraq",
                "United Arab Emirates",
                "Canada"
            ],
            datasets: [
                {
                    data: [133.3, 86.2, 52.2, 51.2, 50.2],
                    backgroundColor: [
                        "#FF6384",
                        "#63FF84",
                        "#84FF63",
                        "#8463FF",
                        "#6384FF"
                    ]
                }]
        };

        let pieChart = new Chart(popCanvas, {
            type: 'pie',
            data: votesData
        });
    });


});


