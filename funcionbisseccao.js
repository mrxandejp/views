
function funcion(func, x) {
    return nerdamer(func).buildFunction().call(undefined, x);
}


function bissecao(formulario){
  var media;

  var func = document.getElementsByName("func")[0].value;

  var a = parseFloat(formulario.a.value);
  var b = parseFloat(formulario.b.value);
  var table = document.getElementById('tabela-numValores');
  var row;
  table.innerHTML="<tr></tr><tr></tr>";
  var i = 0;

  do{
    media = (a+b)/2;
    
    row = table.insertRow(i+1);
    row.innerHTML = '<td class="col-md-6">' + funcion(func,media) + '</td><td class="col-md-6">' + media + '</td>' + '<td class="col-md-6">[' + a +' , ' + b +']</td>'; 

    if(funcion(func, a)*funcion(func, media) < 0){
      b = media;
    }
    if(funcion(func, a)*funcion(func, media) > 0){
      a = media;
    }
    
    i++;

  }while(funcion(func, media) == 0 || Math.abs(b-a) > 0.007);
  return false;
}
