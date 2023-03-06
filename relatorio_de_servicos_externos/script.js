

function toView(){
    const pageData = {}
    pageData.serviceLocation = document.querySelector('.place_of_care_input').value
    pageData.dateAndTime = document.querySelector('#date_and_time_input').value
    const year = 
    const month =
    const day =
    const hour =
    const minute =
    
   


    if(pageData.serviceLocation.length == 0){
        alert("Por favor, adicione o Local de Atendimento!")
    } else if (pageData.dateAndTime.length == 0) {
        alert("Por favor, insira a Data e Hora do atendimento!")
    } else {
        console.log(pageData)
    }
}

