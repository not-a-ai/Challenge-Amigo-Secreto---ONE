

function adicionarAmigo() {
  let novoAmigo = document.getElementById("amigo").value.trim();

  if (novoAmigo !== "") {
    let amigosSalvos = JSON.parse(localStorage.getItem("amigos")) || [];
    console.log(typeof(amigosSalvos))

    amigosSalvos.push(novoAmigo);
    console.log(amigosSalvos)

    localStorage.setItem("amigos", JSON.stringify(amigosSalvos));
    atualizarLista();

    document.getElementById("amigo").value = "";
  } else {
    alert("Digite um nome antes de adicionar")
  }
}

function atualizarLista() {


}