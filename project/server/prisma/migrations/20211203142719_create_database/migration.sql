-- CreateTable
CREATE TABLE `Stores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `store_owner` VARCHAR(14) NOT NULL,
    `store_name` VARCHAR(19) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(8) NOT NULL,
    `value` DECIMAL(10, 2) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `card` VARCHAR(12) NOT NULL,
    `hour` VARCHAR(6) NOT NULL,
    `store_id` INTEGER NOT NULL,
    `type_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `T_Types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` INTEGER NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `origin` ENUM('Entrada', 'Saida') NOT NULL,
    `signal` ENUM('Add', 'Remove') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `T_Types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
