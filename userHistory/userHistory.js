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
                backgroundColor: 'pink',
                borderColor: 'red',
                borderWidth: 2
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
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
                backgroundColor: 'pink',
                borderColor: 'red',
                borderWidth: 2
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
        }
    }
});


//ENERGY CHART ONLY 

//MBS CHART ONLY 







