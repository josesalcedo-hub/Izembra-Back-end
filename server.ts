import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {router as User} from "./src/Models/User/Infrastructure/routes/User.routes" 
import { routerLogin } from "./src/Models/Auth/Infrastructure/routes/login.routes";
import {routerProject} from "./src/Models/Project/Infrastructure/Routes/Project.routes"
import { router as Payment} from "./src/Models/Payments/Infrastructure/routes/Payment.routes";
dotenv.config()

const app = express();

app.use(express.json());
app.use(cors({
    //Especificamos el dominio del Frontend
    origin: 'http://localhost:3000', 
    //Definimos el intercambio de cookie/headers de Auth
    credentials:true,

    //Definimos los metodos permitidos
    methods:['GET', 'POST', 'PUT',],
    allowedHeaders: ['Content-Type', 'Authorization', 'ngrok-skip-browser-warning']
}));


//Rutas

app.use("/api", routerLogin);
app.use("/api/users", User);
app.use("/api", routerProject);
app.use("/api", Payment)
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`Server running on http:localhost: ${PORT}`)
})