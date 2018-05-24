var imagem = document.querySelector('img');

imagem.onclick = function(){
	var source = imagem.getAttribute('src');
	if(source === 'imagens/talos-principle-game.jpg'){
		imagem.setAttribute('src','imagens/talos_principle_the_road.jpg');
	}else{
		imagem.setAttribute('src','imagens/talos-principle-game.jpg');
	}
}

var botao = document.querySelector('button');
var heading = document.querySelector('h1');

function setUserName(){
	var name = prompt('Escreva seu nome');
	localStorage.setItem('name', name);
	heading.innerHTML = 'The Talos Principle é isso, '+name;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	heading.innerHTML = 'The Talos Principle é isso, '+ storedName;
}

botao.onclick = function(){
	setUserName();
}

