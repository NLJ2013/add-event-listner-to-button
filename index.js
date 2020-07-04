// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Event Listner example</h1>`;
document.getElementById('button-test').
  addEventListener('click', () => {
    console.log(event.target.value);
    document.getElementById('display-value').textContent = event.target.value;
  });