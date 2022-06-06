/*
  Warnings:

  - You are about to drop the column `Potass` on the `Sensor` table. All the data in the column will be lost.
  - Added the required column `phosph` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potass` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "Potass",
ADD COLUMN     "phosph" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potass" DOUBLE PRECISION NOT NULL;
