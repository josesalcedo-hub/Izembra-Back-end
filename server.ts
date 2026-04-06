import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {router as User} from "./src/Models/User/Infrastructure/routes/User.routes" 
import { router as Login } from "./src/Models/Auth/Infrastructure/routes/login.routes";
import {router as Data} from "./src/Models/Property/Infrastructure/Routes/property.routes"

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors({
    //Especificamos el dominio del Frontend
    origin: [
        'http://localhost:3000', 
        'https://cl4h1r14-3000.usw3.devtunnels.ms',
        'https://allie-nonannihilable-juelz.ngrok-free.dev'
    ],
    //Definimos el intercambio de cookie/headers de Auth
    credentials:true,

    //Definimos los metodos permitidos
    methods:['GET', 'POST', 'PUT',],
    allowedHeaders: ['Content-Type', 'Authorization', 'ngrok-skip-browser-warning']
}));


//Rutas

app.use("/api", Login)
app.use("/api", User);
app.use("/api", Data)
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`Server running on http:localhost: ${PORT}`)
})