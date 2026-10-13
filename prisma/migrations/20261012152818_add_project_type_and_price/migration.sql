/*
  Warnings:

  - You are about to drop the `UnitType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UnitType" DROP CONSTRAINT "UnitType_projectId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "precioMinimo" DECIMAL(65,30),
ADD COLUMN     "tipoInmueble" TEXT;

-- DropTable
DROP TABLE "UnitType";
