function dateAndTime(){
    const date = document.querySelector('#date_time').value
    const arrayDate = date.split("")
    const year = teste(arrayDate, 3)

    function teste(array, size){
        let stringDate = ""
        while (stringDate,length < array.length) {
            stringDate += array[stringDate.length]
        }
        return stringDate
    }

    console.log(date)
    console.log(year)
}