/*
  Warnings:

  - Added the required column `area` to the `Registro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maquina` to the `Registro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Registro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `registro` ADD COLUMN `area` VARCHAR(191) NOT NULL,
    ADD COLUMN `maquina` VARCHAR(191) NOT NULL,
    ADD COLUMN `tipo` VARCHAR(191) NOT NULL;
