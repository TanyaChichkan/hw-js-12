import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import { alert, notice, info, success, error } from '@pnotify/core';

// const myAlert = error({
//   text: 'Hello ES6',
//   type: 'error',
//   autoOpen: true,
//   width: '500px',
//   minHeight: '250px',
//   delay: 2000,
//   closerHover: true,
// });

// // myAlert.open();

function showError() {
  return error({
    title: 'Oh No!',
    text: 'There is no such a country found. Try it again.',
    animateSpeed: 'fast',
    delay: 2000,
  });
}

function showNotice() {
  return notice({
    text: 'Too many matches found. Please enter a more specific query',
    animateSpeed: 'fast',
    delay: 2000,
  });
}

export { showError, showNotice };
