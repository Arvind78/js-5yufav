// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function gatData(){
  fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((resu)=>{
      console.log(resu)
  })
}
gatData()