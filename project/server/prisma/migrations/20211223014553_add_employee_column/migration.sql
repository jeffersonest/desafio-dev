/*
  Warnings:

  - Added the required column `employee` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Transactions` ADD COLUMN `employee` VARCHAR(30) NOT NULL;
