import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { router as User } from "./Models/User/Infrastructure/routes/User.routes";
import { router as Login } from "./Models/Auth/Infrastructure/routes/login.routes";


dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());


//Rutas

app.use("/api", User);
app.use("/api", Login)
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`Server running on http:localhost: ${PORT}`)
})