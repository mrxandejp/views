
function funcion(func, x) {
    return nerdamer(func).buildFunction().call(undefined, x);
}


function procesar(formulario) {
    var i = 0;
    var func = document.getElementsByName("func")[0].value;
    
    var x = parseFloat(formulario.x.value);
    var y = parseFloat(formulario.y.value);


      while (1) {

        fx = funcion(func,x);
        fy = funcion(func,y);

        raiz = ((x + y)/2);

        if(funcion(func,raiz)*fx < 0) {
          y = raiz; 
        }
        else if(funcion(func,raiz)*fx > 0){ 
           x = raiz
        }
        else return 0;

      }

      function click(){

        document.getElementById('resultado').value = '1';
        
      }


   /*   var table = document.getElementById('tabela-numValores');
      var row;
        
      
        row = table.insertRow(i+1);
        row.innerHTML = '<td>x<sub>' + i + '</sub></td><td>' + x_1 + '</td>'; 
      i++;


        //I imagine that this is your safety so I would implement it like this
        if(i > 100) break;
    } while (e > 0.01);
    document.getElementById('resultado').innerHTML = resultado + '</tbody></table><br>' + (i == 100 ? 'La solucion no es convergente. ' : 'La solucion es ' + x);
    return false;*/

