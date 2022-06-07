/*
  Warnings:

  - You are about to drop the column `gaz_1` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `gaz_2` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `gaz_3` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `gaz_4` on the `Sensor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "gaz_1",
DROP COLUMN "gaz_2",
DROP COLUMN "gaz_3",
DROP COLUMN "gaz_4",
ADD COLUMN     "alcool" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "co" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "no2" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "voc" DOUBLE PRECISION NOT NULL DEFAULT 0;
