/*
  Warnings:

  - Added the required column `co2` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dev_id` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humidity` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nitrate` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phos` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potass` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temp` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sensor" ADD COLUMN     "co2" INTEGER NOT NULL,
ADD COLUMN     "dev_id" TEXT NOT NULL,
ADD COLUMN     "humidity" INTEGER NOT NULL,
ADD COLUMN     "nitrate" INTEGER NOT NULL,
ADD COLUMN     "phos" INTEGER NOT NULL,
ADD COLUMN     "potass" INTEGER NOT NULL,
ADD COLUMN     "temp" INTEGER NOT NULL;
