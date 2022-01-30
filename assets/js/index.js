const head = document.querySelector('head');
const linkfav = document.createElement('link');
linkfav.rel = 'shortcut icon';
linkfav.type = 'imagex/img';
linkfav.href = 'assets/img/channels4_profile.jpg';

head.appendChild(linkfav);

let data = new Date();
let ano = data.getFullYear();

console.log(ano);
const copyright = document.createElement('p');
copyright.textContent = '\u00a9Júlio César ' + ano;
copyright.classList.add('copyright');

document.querySelector('.rodape').appendChild(copyright);