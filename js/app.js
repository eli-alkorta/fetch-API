'use strict';

const txt = document.querySelector('#txtBtn');
const json = document.querySelector('#jsonBtn');
const api = document.querySelector('#apiBTN');

function bringTxt(){

  fetch('datos.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
      const result = document.querySelector('#resultado').innerText = data;
    })
    .catch(function(error){
      console.log(error);
    })
}

function bringJson(){

  fetch('empleados.json')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      let html = '';
      data.map(user => {
        html += `<li>${user.nombre}: ${user.puesto}</li>`
      })
      const result = document.querySelector('#resultado').innerHTML = html;
    })
    .catch(function(error){
      console.log(error);
    })
}

function callApi() {

  fetch('https://picsum.photos/list')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let html = '';
      data.map(user => {
        html += `<li><a target="_blank" href="${user.post_url}">Ver imagen</a> ${user.author}</li>`
      })
      const result = document.querySelector('#resultado').innerHTML = html;
    })
    .catch(function(error){
      console.log(error);
    })
}




txt.addEventListener('click', bringTxt);
json.addEventListener('click', bringJson);
api.addEventListener('click', callApi);