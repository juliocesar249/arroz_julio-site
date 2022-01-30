let data = new Date();
let ano = data.getFullYear();

console.log(ano);
const copyright = document.createElement('p');
copyright.textContent = '\u00a9Júlio César ' + ano;
copyright.classList.add('copyright');

document.querySelector('.rodape').appendChild(copyright);