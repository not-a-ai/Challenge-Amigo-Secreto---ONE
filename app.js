let amigos = localStorage.getItem("amigos");
if (amigos && amigos !== "") {
    atualizarLista();
}
function adicionarAmigo() {
  let novoAmigo = document.getElementById("amigo").value.trim();

  if (novoAmigo !== "") {
    let amigosSalvos = JSON.parse(localStorage.getItem("amigos")) || [];

    amigosSalvos.push(novoAmigo);

    localStorage.setItem("amigos", JSON.stringify(amigosSalvos));
    atualizarLista();

    document.getElementById("amigo").value = "";

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';
  } else {
    alert("Por favor, insira um nome.")
  }
}

function atualizarLista() {
  let amigos = JSON.parse(localStorage.getItem("amigos"));
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for(let amigo of amigos ) {
    let newli = document.createElement("li");
    newli.innerHTML = amigo;
    lista.appendChild(newli);
  }
}

function sortearAmigo() {
  if(!localStorage.getItem("amigos") ) {
    alert("Adicione amigos ao jogo");
  } else {
    atualizarLista();
    amigos = JSON.parse(localStorage.getItem("amigos"));
    let i = Math.floor(Math.random() * (amigos.length))
    let amigoSorteado = amigos[i];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é ${amigoSorteado}`;
  }
}
