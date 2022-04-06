/* header functions */

const headerFunctions = {
  
  systemHeader(){
    console.log("===============================")
    console.log("  SISTEMA DE AVALIAÇÃO FÍSICA  ")
    console.log("===============================")
  },

  subTitle(title){
    console.log(`           ${title}            `)
    console.log("===============================")
  },

  baseboard(){
    console.log("===============================")
  },

  showArray(title, array){
    
    console.log(`${title}`)
    for(let i = 0; i < array.length; i++){
      console.log(`${array[i]}`)
    } 
  },

}

module.exports = {
  headerFunctions
}