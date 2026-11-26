//importar todas las librerias para configurara el proyecto
import express from "express";
import cors from "cors";
//importar el router de tareas
import TareasRouter from "./service/TareasService.js";

//crear ua instancia de express
const app = express();
//configurar cors para permitir peticiones desde el fronted
app.use(cors());
//configurar express para poder recibir datos en formato json
app.use(express.json())
//servicio con ruta base
app.get("/",(req,res)=>{
res.send("hola mundo desde mi servidor de express")
});
app.use("/tareas",TareasRouter)
//exportar la instancia de express para poder usarla en otros archivos
export default app;