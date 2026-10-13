/*
  Warnings:

  - You are about to drop the `project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unidades` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "unidades" DROP CONSTRAINT "unidades_id_proyecto_fkey";

-- DropTable
DROP TABLE "project";

-- DropTable
DROP TABLE "unidades";

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "constructora" TEXT,
    "ubicacion" TEXT,
    "estado" TEXT NOT NULL,
    "plazoEntrega" TEXT,
    "valorSeparacion" DECIMAL(65,30),
    "porcentajeFinanciacion" DECIMAL(65,30),
    "rentabilidadAnual" DECIMAL(65,30),
    "rentaCorta" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitType" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "tipoInmueble" TEXT NOT NULL,
    "precioMinimo" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UnitType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectMedia" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "position" INTEGER,

    CONSTRAINT "ProjectMedia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UnitType" ADD CONSTRAINT "UnitType_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectMedia" ADD CONSTRAINT "ProjectMedia_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
