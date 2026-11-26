fetch("http://localhost:3000/tareas/1",{
    method:"PATCH",
    heders:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        titulo:"tarea 1",
        completada:true
    })
})