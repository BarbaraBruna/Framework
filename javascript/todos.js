function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function criaLinha(todos) {

    console.log(todos)

    
    linha = document.createElement("tr"); //criei a linha
    tdId = document.createElement("td"); // criei coluna
    tdTitle = document.createElement("td");

    
    tdTitle.innerHTML = todos.title
    tdId.innerHTML = todos.userId

    linha.appendChild(tdId);
    linha.appendChild(tdTitle);

    return linha;

}

function main () {

    let data = fazGet("https://jsonplaceholder.typicode.com/todos")
    let todos = JSON.parse(data);
    let tabela = document.getElementById("tabela")

    todos.forEach(element => {

        let linha = criaLinha(element);
        tabela.appendChild(linha);

    });
    
    
    
    
    //onsole.log(postagem);

    //console.log(fazGet("https://jsonplaceholder.typicode.com/posts"));

}

main ();