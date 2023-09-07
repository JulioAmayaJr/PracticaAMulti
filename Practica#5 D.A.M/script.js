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

function moda(datos) {
    
    const repetido={
        repite: 0,
        valor: 0
    }
    datos.sort()
    const clon=datos
    for (let i = 0; i < clon.length; i++) {
        if (datos[i]===datos[i+1]) {
            repetido.repite+=1
            repetido.valor=datos[i]
        }
        
    }
    return repetido
    

}


console.log(moda(array))