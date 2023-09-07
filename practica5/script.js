let numerito=prompt("Ingrese la cantidad de datos");
const array=[]
for (let i = 0; i < numerito; i++) {
    let num=prompt("Ingrese la "+(i+1)+" cantidad")
     array[i]=[num]
}
console.log(array)

function media(datos) {
    function suma(serie) {
        let suma=0
        serie.forEach(numero => {
            suma+=parseInt(numero)
        });
        return suma;
    }
    return suma(datos)/datos.length
}


function varianza(datos) {
    
    function vari(datos) {
        let total=0
        for (let i = 0; i < datos.length; i++) {

            total+=(Math.pow(datos[i]-media(datos),2))
        }
        return total/datos.length
    }
    return vari(datos);

}

function moda(array) {
    const frecuencia = {};
  
    array.forEach(elemento => {
      if (frecuencia[elemento]) {
        frecuencia[elemento]++;
      } else {
        frecuencia[elemento] = 1;
      }
    });
    let moda;
    let maxFrecuencia = 0;
    for (const elemento in frecuencia) {
      if (frecuencia[elemento] > maxFrecuencia) {
        moda = elemento;
        maxFrecuencia = frecuencia[elemento];
      }
    }
  
    return moda;
  }

  function Mediana(array) {
    const sortedArray = array.slice().sort((a, b) => a - b);
  
    const n = sortedArray.length;
  
    if (n % 2 !== 0) {
      return sortedArray[Math.floor(n / 2)];
    } else {
      const medio1 = sortedArray[n / 2 - 1];
      const medio2 = sortedArray[n / 2];
      return (medio1 + medio2) / 2;
    }
  }
  
  function Desviacion(datos) {
    const varianzaValor = varianza(datos);

    const desviacion = Math.sqrt(varianzaValor);

  return desviacion;
  }
  
  var tabla = document.querySelector('table tbody');
  
  
  
  tabla.innerHTML = `
    <tr>
        <td>Media</td>
        <td>${media(array)}</td>
    </tr>
    <tr>
        <td>Varianza</td>
        <td>${varianza(array)}</td>
    </tr>
    <tr>
        <td>Desviacion</td>
        <td>${Desviacion(array)}</td>
    </tr>
    <tr>
        <td>Moda</td>
        <td>${moda(array)}</td>
    </tr>
    <tr>
        <td>Mediana</td>
        <td>${Mediana(array)}</td>
    </tr>
`;