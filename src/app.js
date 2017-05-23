if(module.hot) {
  module.hot.accept()
}

var _ = require('lodash');
import {groupBy} from 'lodash/collection'
import people from './people'

import './styles/style.scss'
import robotURL from './images/robot.jpg'

const img = document.createElement('img')
img.src = robotURL
img.style.padding = "0 20px"
img.width = 80
document.querySelector('#app').appendChild(img)

// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);

// alert(other); // expect [1, 2, 3, [4]]

// var beginArr = [2, 4, 6, 7];
// var finalArr = [...beginArr, 'Final END'];

// alert(finalArr);

// var app_home = document.querySelector("#appHome");
// alert(app_home.innerHTML);

const managerGroups = groupBy(people, 'manager')

const root = document.querySelector('#root')
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`