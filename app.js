atualizarLista()

function adicionarAmigo() {
  let novoAmigo = document.getElementById("amigo").value.trim();

  if (novoAmigo !== "") {
    let amigosSalvos = JSON.parse(localStorage.getItem("amigos")) || [];

    amigosSalvos.push(novoAmigo);

    localStorage.setItem("amigos", JSON.stringify(amigosSalvos));
    atualizarLista();

    document.getElementById("amigo").value = "";
  } else {
    alert("Digite um nome antes de adicionar")
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