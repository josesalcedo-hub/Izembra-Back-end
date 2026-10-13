/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `passwordHash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "password",
ADD COLUMN     "passwordHash" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "createdAt" DROP DEFAULT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "constructora" TEXT NOT NULL,
    "ubicacion" TEXT,
    "backimage" TEXT,
    "portada" TEXT,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unidades" (
    "id" TEXT NOT NULL,
    "id_proyecto" TEXT NOT NULL,
    "tipo_inmueble" TEXT NOT NULL,
    "precio_minimo" TEXT NOT NULL,
    "plazo_entrega" TEXT NOT NULL,
    "valor_separacion" TEXT NOT NULL,
    "porcentaje_fin" INTEGER NOT NULL,
    "valor_estimado_anual" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "renta_corta" BOOLEAN NOT NULL,

    CONSTRAINT "unidades_pkey" PRIMARY KEY ("id","id_proyecto")
);

-- AddForeignKey
ALTER TABLE "unidades" ADD CONSTRAINT "unidades_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
