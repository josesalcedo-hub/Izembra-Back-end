/*
  Warnings:

  - Made the column `descripcion` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `constructora` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ubicacion` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `plazoEntrega` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valorSeparacion` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `porcentajeFinanciacion` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rentaCorta` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "descripcion" SET NOT NULL,
ALTER COLUMN "constructora" SET NOT NULL,
ALTER COLUMN "ubicacion" SET NOT NULL,
ALTER COLUMN "plazoEntrega" SET NOT NULL,
ALTER COLUMN "valorSeparacion" SET NOT NULL,
ALTER COLUMN "porcentajeFinanciacion" SET NOT NULL,
ALTER COLUMN "rentaCorta" SET NOT NULL;
