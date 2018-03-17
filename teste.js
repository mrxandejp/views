convert();


    function convert() {
      base = 2
      ndigitos = 1
      limInf = -2
      limSup = 2

      var cardinalidade = parseInt(2*(base-1)*(Math.pow(base,ndigitos-1))*(limSup - limInf + 1) +1);

      var resultado = cardinalidade.toString();
      //document.getElementById('resultado').value = resultado;

      var numValores = new Array(cardinalidade);
      var aux = 0;
      if(base == 2){
        if(ndigitos == 1){
          for (var i = limInf; i <= limSup; i++) {
            numValores[aux] = "0.1 x10^" + i.toString();
            console.log(numValores[aux]);
            aux++;                  
          } 
        }
      }
      //else{

      //}
    }
