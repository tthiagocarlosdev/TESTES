var input = require('readline-sync')

function matrixCreator(greatness){
  let matrix = []
  let array = []

  function getRandomIntInclusive(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for(let i = 0; i < greatness; i++){
  
    for(let j = 0; j < greatness; j++){
      array.push((getRandomIntInclusive(1, 100)))
    }
  
    matrix.push(array)
    array = []
  }

  return matrix
}

function matrixShow(matrix, greatness){

  for(let i = 0; i < greatness; i++){
    console.log(matrix[i])
    
  }
}

function diagonalDifference(arr){
  let lineSize = arr[0].length
  
  function sumLeftToRight(arr, greatness){
    let sumLeftToRight = 0;
  
    for(let lin=0; lin<greatness; lin++){
      for(let col=0; col<greatness; col++)
      if(lin == col){
        sumLeftToRight += (arr[lin][col])
      }  
    }
    
    return sumLeftToRight
  }
  
  function sumRightToLeft(arr, greatness){
    let sumRightToLeft = 0;
  
    for(let lin=0; lin<greatness; lin++){
      for(let col=0; col<greatness; col++)
      if(lin + col == greatness - 1){
        sumRightToLeft += (arr[lin][col])
      }  
    }
    
    return sumRightToLeft 
  }
  
  function subtract(valueA, valueB){
    return Math.abs(valueA - valueB)
  }
  
  let sumLeftToRightFinal = sumLeftToRight(arr, lineSize)
  let sumRightToLeftFinal = sumRightToLeft(arr, lineSize)

  
  return subtract(sumLeftToRightFinal, sumRightToLeftFinal)
  
}

const greatness = input.question(`What's greatness?` )
matriz  = (matrixCreator(greatness))
matrixShow(matriz, greatness)
console.log(diagonalDifference(matriz))