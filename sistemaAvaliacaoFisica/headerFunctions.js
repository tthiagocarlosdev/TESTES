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

  // function load
  load(title){
    
    function syncDelay(milliseconds){
      var start = new Date().getTime();
      var end=0;
      while( (end-start) < milliseconds){
          end = new Date().getTime();
      }
    }  
    
    let carregar = `..`
    let percentual = 20
    for(i = 1; i <= 5; i++){
      console.log(`${title}${carregar}${percentual}%`)
      syncDelay(1000);
      carregar += `..`
      percentual += 20
      console.clear()
    }
  },

  welcome(){
    console.log(`\nSeja bem-vindo ao Sistema de Avaliação física!\n`)
  },

  theAnd(){
    console.log(`Sistema Encerrado!`)
  },

}

module.exports = {
  headerFunctions
}