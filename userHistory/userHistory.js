import { getUserHistoryStorage } from '../utils.js';
import { countSleep, countMood } from './historyUtils.js';


const getHistoryData = getUserHistoryStorage();



//SLEEP CHART ONLY 

const sleepLabels = ['less6', 'sixToNine', 'ninePlus'];
var ctx = document.getElementById('myChartSleep').getContext('2d');
var myChart = new Chart(ctx, {  //  eslint-disable-line
    type: 'bar',
    data: {
        labels: sleepLabels,
        datasets: [
            {
                label: '# of times sleep pattern',
                data: countSleep(getHistoryData),
                backgroundColor: [
                    'rgba(151, 158, 236, 0.5)',
                    'rgba(163, 187, 156, 0.5)',
                    'rgba(265, 250, 162, 0.5)',
                ],
                borderColor: 'lavender',
                borderWidth: 2
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Sleep Trend',
            fontColor: 'black',
            fontFamily: "'Julius Sans One', sans-serif",
            fontSize: 24
        },
        legend: {
            labels: {
                fontColor: 'black',
                fontFamily: "'Poiret One', cursive",
                fontSize: 18
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    fontFamily: "'Poiret One', cursive",
                    fontSize: 22,
                    fontColor: 'black'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    fontFamily: "'Poiret One', cursive",
                    fontSize: 22,
                    fontColor: 'black'
                }
            }],
        }
    }
});



//MOOD CHART ONLY 
const moodLabels = ['happy', 'sad', 'stressed'];
var ctx1 = document.getElementById('myChartMood').getContext('2d');
var myChart = new Chart(ctx1, {  //  eslint-disable-line
    type: 'bar',
    data: {
        labels: moodLabels,
        datasets: [
            {
                label: '# of times sleep pattern',
                data: countMood(getHistoryData),
                backgroundColor: [
                    'rgba(255, 154, 101, 0.53)',
                    'rgba(218, 165, 181, 0.66)',
                    'rgba(219, 185, 235, 0.66)'
                ],
                borderColor: 'orange',
                borderWidth: 2
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Mood Board',
            fontColor: 'black',
            fontFamily: "'Julius Sans One', sans-serif",
            fontSize: 24
        },
        legend: {
            labels: {
                fontColor: 'black',
                fontFamily: "'Poiret One', cursive",
                fontSize: 18
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    fontFamily: "'Poiret One', cursive",
                    fontSize: 22,
                    fontColor: 'black'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    fontFamily: "'Poiret One', cursive",
                    fontSize: 22,
                    fontColor: 'black'
                }
            }],
        }
    }
});