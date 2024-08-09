for (let i = 0; i <=10; i++){
     console.log(i);
}

for(let i = 0; i<=20; i++){
    console.log(i);
}

const frutas = ["manzana","uva","pera","naranaja",];
for (let i = 1;i < frutas.length; i++){
    console.log(frutas[i]);
}

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

const integrantes = ["leticia","gaby","yamilet","solange"];
let lista = ""; 
 console.log(integrantes);

 for (let i = 0; i < integrantes.length; i++) {
    lista += `<li>${integrantes[i]}</li>`
 }

 document.getElementById("integrantes").innerHTML = `<ul>${lista}</u>`
 document.getElementById("lider").innerText = integrantes[0]