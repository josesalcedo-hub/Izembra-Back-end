import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// 1. Definimos la URL directamente para probar
const connectionString = process.env.DATABASE_URL;

// 2. Creamos el Pool con la URL plana
const pool = new pg.Pool({
  connectionString: connectionString,
});

// 3. Configuramos el adaptador
const adapter = new PrismaPg(pool);

export const prismaClient = new PrismaClient({
  adapter 
});

console.log("🚀 Conexión intentada con URL hardcoded");