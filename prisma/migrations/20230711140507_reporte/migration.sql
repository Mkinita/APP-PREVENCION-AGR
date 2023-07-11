-- AlterTable
ALTER TABLE `registro` MODIFY `foto` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Reporte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `enlace` VARCHAR(191) NULL,
    `area` VARCHAR(191) NOT NULL,
    `maquina` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
