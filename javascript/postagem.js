function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function criaLinha(postagem) {

    
    linha = document.createElement("tr"); //criei a linha
    tdUserId = document.createElement("td");
    tdTitle = document.createElement("td"); // criei coluna
    tdBody = document.createElement("td");

    tdUserId.innerHTML = postagem.userId
    tdTitle.innerHTML = postagem.title
    tdBody.innerHTML = postagem.body

    linha.appendChild(tdUserId); //linhas filhas
    linha.appendChild(tdBody);
    linha.appendChild(tdTitle);

    return linha;
}

function main () {

    let data = fazGet("https://jsonplaceholder.typicode.com/posts")
    let postagem = JSON.parse(data);
    let tabela = document.getElementById("tabela")

    postagem.forEach(element => {

        let linha = criaLinha(element);
        tabela.appendChild(linha);

    });
    

}

main ();