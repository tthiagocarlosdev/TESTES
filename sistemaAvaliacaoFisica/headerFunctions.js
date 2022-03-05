var input = require('readline-sync')

/* header functions */
const headerFunctions = {
  
  systemHeader: function(){
    console.log("===============================")
    console.log("  SISTEMA DE AVALIAÇÃO FÍSICA  ")
    console.log("===============================")
  },

  anamnesisHeader: function(){
    console.log("           Anamnese            ")
    console.log("===============================")
  },

}

module.exports = {
  headerFunctions
}