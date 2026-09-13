import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(() => {
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  $('button').on('click', _.debounce(updateCounter, 300, { leading: true, trailing: false }));
});
