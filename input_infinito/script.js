let technical = {
    names:[],
    enrollment:[],
}

function adicionar(){
    let name = document.querySelector('#name').value;
    let registration = document.querySelector('#registration').value;
    let lista = document.querySelector('#lista')
    
    

    console.log(technical)

    technical.names.push(name);
    technical.enrollment.push(registration);
    

    // let listItem = document.createElement('p');
    // listItem.textContent = `Nome: ${technical.names}, Matrícula: ${technical.enrollment}`;

    // lista.appendChild(listItem);

    for(value of technical.names){
        console.log(value)
    }

    for(value of technical.enrollment){
        console.log(value)
    }

    let content = '';
    for (let i = 0; i < technical.names.length; i++) {
        content += `Nome: ${technical.names[i]}, Matrícula: ${technical.enrollment[i]}.<br>`;
        lista.innerHTML = content;
    }

    console.log(technical)
}