/*
  Warnings:

  - You are about to drop the column `Body` on the `post` table. All the data in the column will be lost.
  - Added the required column `body` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `Body`,
    ADD COLUMN `body` VARCHAR(191) NOT NULL;
