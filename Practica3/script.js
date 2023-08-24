document.addEventListener("DOMContentLoaded",function(){
const btnAgregar=document.getElementById("btnAgregar")
const btnEditar=document.getElementById("btnEditar")
const nombre=document.getElementById("nombre")
const apellido=document.getElementById("apellido")
const genero=document.getElementById("genero")
const fecha=document.getElementById("fecha")
const tabla=document.getElementById("tablita")


btnEditar.setAttribute("disabled",true)


const personas={
    data:[],
    id:0,
    add: function (persona) {
        this.id++
        persona.id=this.id
        this.data.push(persona)
    }
}
btnAgregar.addEventListener("click",function(){
    if(nombre.value==="" || apellido.value==="" || fecha.value===""){
        return
    }

        const persona={
            nombre:nombre.value,
            apellido:apellido.value,
            genero:genero.value,
            fecha: fecha.value
        }
        personas.add(persona)
        console.log(personas.data)
        
        mostrar()
})


function mostrar() {
    tabla.innerHTML=""

    tabla.innerHTML=`<thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Gerenero</th>
      <th scope="col">Fecha</th>
      <th scope="col">Opciones</th>

    </tr>
  </thead>`
    personas.data.forEach(i => {
        tabla.innerHTML+=`

        <tr>
            <td>${i.id}</td>
            <td>${i.nombre}</td>
            <td>${i.apellido}</td>
            <td>${i.genero}</td>
            <td>${i.fecha}</td>
            <td>
            <button type="button" id="btnAgregar" class="btn btn-success">Agregar</button>
            <button type="button" id="btnEditar" class="btn btn-warning">Editar</button>
            </td>
        </tr>
       
        
        `
    });


}

})


