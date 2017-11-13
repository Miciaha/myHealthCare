/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // Main Template Color
    var brandPrimary = '#3185fc';


    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var sleepChart = $('#sleephistory');
    var myLineChart = new Chart(sleepChart, {
        type: 'bar',
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea:false
                    }
                }]
            }

        },
        data: {
            labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "Hours slept",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(60, 94, 175, 0.74)",
                    borderColor: brandPrimary,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [2, 4, 5, 8, 5, 6,8],
                    spanGaps: false
                }
            ]
        }
    });



    var bloodPressureChart = $('#bloodPressureChart');
    var bpChar = new Chart (bloodPressureChart, {
       type: 'bar',
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea:false
                    }
                }]
            }

        },
        data: {
            labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "Systolic",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(212, 64, 86, 0.89)",
                    borderColor: "rgba(200, 45, 68, 1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [120, 115, 135, 145, 120, 115, 110],
                    spanGaps: false
                },
                {
                    label: "Diastolic",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(41, 167, 199, 0.82)",
                    borderColor: brandPrimary,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [75, 68, 85, 95, 85, 75, 72],
                    spanGaps: false
                }
            ]
        }
    });

    // ------------------------------------------------------- //
    // Pie Chart
    // ------------------------------------------------------ //
    var PIECHART = $('#pieChart');
    var myPieChart = new Chart(PIECHART, {
        type: 'doughnut',
        data: {
            labels: [
                "First",
                "Second",
                "Third"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ]
                }]
        }
    });

});
