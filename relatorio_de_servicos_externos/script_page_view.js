window.onload = function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var dados_str = urlParams.get('pageData');
    var dados = JSON.parse(decodeURIComponent(dados_str));
    console.log(dados)
    document.getElementById('place_of_care').innerHTML = dados.serviceLocation;
    document.getElementById('date').innerHTML = dados.dateAndTimeInBrazilianFormat;
    document.getElementById('time').innerHTML = dados.dateAndTimeInBrazilianFormat;
    document.getElementById('reported_defect').innerHTML = dados.reportedDefect;
    document.getElementById('performed_services').innerHTML = dados.performedServices;
    document.getElementById('user_name').innerHTML = dados.userName;
    document.getElementById('user_registration').innerHTML = dados.userRegistration;

}