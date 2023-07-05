window.onload = function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var dados_str = urlParams.get('pageData');
    var dados = JSON.parse(decodeURIComponent(dados_str));
    console.log(dados)
    document.getElementById('place_of_care').innerHTML = dados.serviceLocation;
    document.getElementById('date').innerHTML = dados.dateAndTimeInBrazilianFormat.date;
    document.getElementById('time').innerHTML = dados.dateAndTimeInBrazilianFormat.time;
    document.getElementById('reported_defect').innerHTML = dados.reportedDefect;
    document.getElementById('performed_services').innerHTML = dados.performedServices;
    let list = document.querySelector('#list_of_technicians')
    
    let content = '';
    for (let i = 0; i < dados.techniciansData.names.length; i++) {
        content += `<span style="font-weight: bold;">Nome:</span> ${dados.techniciansData.names[i]}, <span style="font-weight: bold;">Matrícula:</span> ${dados.techniciansData.enrollment[i]}<br>`;
        list.innerHTML = content;
    }
    document.getElementById('user_name').innerHTML = dados.userName;
    document.getElementById('user_registration').innerHTML = dados.userRegistration;

}