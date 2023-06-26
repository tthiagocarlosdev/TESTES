function toView(){
    const pageData = {}
    const technician = {}
    const registration = {}

    pageData.serviceLocation = document.querySelector('.place_of_care_select').value
    pageData.dateAndTime = document.querySelector('#date_and_time_input').value
    pageData.dateAndTimeInBrazilianFormat = dateTime(pageData.dateAndTime)
    
    pageData.reportedDefect = document.querySelector('#reported_defect').value
    pageData.performedServices = document.querySelector('#performed_services').value
    
    technician.technician_a = document.querySelector('#technician_a').value
    technician.technician_b = document.querySelector('#technician_b').value
    technician.technician_c = document.querySelector('#technician_c').value
    technician.technician_d = document.querySelector('#technician_d').value
    pageData.technical = technician
    const conditionTechnician = pageData.technical.technician_a.length == 0 && 
                                pageData.technical.technician_b.length == 0 && 
                                pageData.technical.technician_c.length == 0 && 
                                pageData.technical.technician_d.length == 0;
    
    
    registration.registration_a = document.querySelector('#registration_a').value
    registration.registration_b = document.querySelector('#registration_b').value
    registration.registration_c = document.querySelector('#registration_c').value
    registration.registration_d = document.querySelector('#registration_d').value
    pageData.enrollment = registration

    let regex_registration = /(^[0-9]{3}.[0-9]{3}-[0-9])/
    let registrationNumbers = 0

    for( let value in registration ){
        if( regex_registration.test(registration[value]) ){
            registrationNumbers++
        }
    }

    pageData.userName = document.querySelector('#user_name').value
    pageData.userRegistration = document.querySelector('#user_registration').value
    let validUserRegistration = regex_registration.test(pageData.userRegistration)

   
    if(pageData.serviceLocation.length == 0){
        alert("Por favor, adicione o Local de Atendimento!")
    } else if (pageData.reportedDefect.length == 0) {
        alert("Por favor, informe o defeito!")
    } else if (pageData.performedServices.length == 0) {
        alert("Por favor, informe o serviço executado!")
    } else if (conditionTechnician) {
        alert("Por favor, informe pelo menos um técnico!")
    } else if (registrationNumbers == 0) {
        alert("Por favor, informe uma matrícula válida!")
    } else if (pageData.userName.length == 0) {
        alert("Por favor, informe o nome completo do usuário!")
    } else if (pageData.userRegistration.length == 0) {
        alert("Por favor, informe o número de matrícula do usuário!")
    } else if (!validUserRegistration) {
        alert("Por favor, informe um número válido de matrícula do usuário!")
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