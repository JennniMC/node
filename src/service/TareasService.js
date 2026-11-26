import { Router } from "express";
const TareasRouter = Router();

const tareas=[
    {
    id:1,
    titulo:"tarea 1",
    completada:false
    }
]





TareasRouter.get("/",(req,res)=>{
    //res para modificar el status code de la respuesta
    //json para enviar información en el body de la respuesta
res.status(200).json(tareas)
})

TareasRouter.patch("/:id",(req,res)=>{
    //obtener el id de la ruta
    const id = req.params.id;
    //obtener la informacion del body
    const {titulo,completada}=req.body;
    console.log(id,titulo,completada);
    res.json({"Tarea acyualizada correctamente"})

})
export default TareasRouter; //ocupar esta constante en otros arhivos

