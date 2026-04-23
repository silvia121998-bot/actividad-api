const resultado = document.getElementById("resultado");

window.onload = () =>{
cargarInicial();
}

async function cargarInicial(){

const res = await fetch("https://rickandmortyapi.com/api/character");
const data = await res.json();

mostrar(data.results.slice(0,9));
}

async function buscarPersonaje(){

let nombre = document.getElementById("nombre").value.trim();

if(nombre===""){
cargarInicial();
return;
}

try{

const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
const data = await res.json();

mostrar(data.results);

}catch{

resultado.innerHTML = `
<h2 style="text-align:center;">No encontrado</h2>
`;
}

}

async function aleatorio(){

let numero = Math.floor(Math.random()*826)+1;

const res = await fetch(`https://rickandmortyapi.com/api/character/${numero}`);
const data = await res.json();

mostrar([data]);
}

function mostrar(lista){

resultado.innerHTML = lista.map(personaje => `
<div class="card">
<img src="${personaje.image}">
<div class="card-info">
<h3>${personaje.name}</h3>
<p><strong>Estado:</strong> ${personaje.status}</p>
<p><strong>Especie:</strong> ${personaje.species}</p>
<p><strong>Género:</strong> ${personaje.gender}</p>
</div>
</div>
`).join("");

}

function limpiar(){
document.getElementById("nombre").value="";
cargarInicial();
}