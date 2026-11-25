import app from "./app.js";
import "dotenv/config.js";
app.listen(process.env.PORT,()=>{
    console.log("servidor corriendo en el puerto 3000")
})