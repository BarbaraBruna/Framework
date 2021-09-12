function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function criaLinha(album) {

    
    linha = document.createElement("tr"); //criei a linha
    tdUserId = document.createElement("td"); // criei coluna
    tdTitle = document.createElement("td");

    tdUserId.innerHTML = album.userId // o texto é igual Id
    tdTitle.innerHTML = album.title

    linha.appendChild(tdUserId);
    linha.appendChild(tdTitle);

    return linha;

}

function main () {

    let data = fazGet("https://jsonplaceholder.typicode.com/albums")
    let album = JSON.parse(data);
    let tabela = document.getElementById("tabela")

    album.forEach(element => {

        let linha = criaLinha(element);
        tabela.appendChild(linha);

    });
    
    
    
    
    //onsole.log(postagem);

    //console.log(fazGet("https://jsonplaceholder.typicode.com/posts"));

}

main ();