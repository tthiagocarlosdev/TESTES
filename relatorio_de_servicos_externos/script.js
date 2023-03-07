function toView(){
    const pageData = {}
    pageData.serviceLocation = document.querySelector('.place_of_care_input').value
    pageData.dateAndTime = document.querySelector('#date_and_time_input').value
    pageData.dateAndTimeInBrazilianFormat = dateTime(pageData.dateAndTime)
   
    if(pageData.serviceLocation.length == 0){
        alert("Por favor, adicione o Local de Atendimento!")
    } else {
        console.log(pageData)
    }
}


//functions declarations
function dateTime(value){

    if(value.length == 0){

        const computerDate = new Date()
        const actual = new Intl.DateTimeFormat("pt-br", {
            dateStyle: "short", timeStyle: "short"
        }).format(computerDate)

        return actual

    } else {
        
        const arrayDate = value.split("")
        const year = arrayDate.slice(0, 4).toString().replace(/,/g, "") 
        const month = arrayDate.slice(5, 7).toString().replace(/,/g, "")
        const day = arrayDate.slice(8, 10).toString().replace(/,/g, "")
        const hours = arrayDate.slice(11, 13).toString().replace(/,/g, "")
        const minutes = arrayDate.slice(14, 16).toString().replace(/,/g, "")

        return `${day}/${month}/${year}, ${hours}:${minutes}`
        
    }

}