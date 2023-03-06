
function dateAndTime(){
    let finalDate = document.querySelector('#resultador_final')    
    const dateEntered = document.querySelector('#date_time').value
    let resultFinal = ""

    if (dateEntered.length == 0) {
        const computerDate = new Date()
        const actual = new Intl.DateTimeFormat("pt-br", {
            dateStyle: "short", timeStyle: "short"
        }).format(computerDate)

        console.log(actual)

        resultFinal = actual

    } else {
        const arrayDate = dateEntered.split("")
        const year = arrayDate.slice(0, 4).toString().replace(/,/g, "") 
        const month = arrayDate.slice(5, 7).toString().replace(/,/g, "")
        const day = arrayDate.slice(8, 10).toString().replace(/,/g, "")
        const hours = arrayDate.slice(11, 13).toString().replace(/,/g, "")
        const minutes = arrayDate.slice(14, 16).toString().replace(/,/g, "")

        resultFinal = `${day}/${month}/${year}, ${hours}:${minutes}`

        console.log(dateEntered)

    }

    finalDate.innerHTML = resultFinal
    
}

/*
    Documentação de input datetime-local e Intl.DateTimeFormat

    * datetime-local -> <input> elementos do tipo datetime-local criam controles de entrada que permitem ao usuário inserir facilmente uma data e uma hora, incluindo ano, mês e dia, bem como a hora em horas e minutos.
    * Intl.DateTimeFormat -> O objeto Intl.DateTimeFormat é um constructor para objetos que habilita o formato de data e hora no idioma padrão.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#browser_compatibility
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
*/