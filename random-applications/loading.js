function loading(){
  
    function syncDelay(milliseconds){
      let start = new Date().getTime();
      let end=0;
      while( (end-start) < milliseconds){
          end = new Date().getTime();
      }
     }  
    
    let toLoad = `....`
    let percentage = 20
    while (percentage <= 100) {
        console.clear()
        console.log(`loading ${toLoad} ${percentage}%`)
        syncDelay(1000);
        toLoad += `....`
        percentage += 20
    }
}

loading()
