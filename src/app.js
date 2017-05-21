var _ = require('lodash');

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

alert(other); // expect [1, 2, 3, [4]]

var beginArr = [2, 4, 6, 7];
var finalArr = [...beginArr, 'Final END'];

alert(finalArr);

var app_home = document.querySelector("#appHome");
alert(app_home.innerHTML);