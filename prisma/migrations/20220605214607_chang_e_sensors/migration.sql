/*
  Warnings:

  - You are about to drop the column `co2` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `humidity` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `phos` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `potass` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `temp` on the `Sensor` table. All the data in the column will be lost.
  - Added the required column `Potass` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cond` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gaz_1` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gaz_2` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gaz_3` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gaz_4` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humi_in` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humi_out` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lati` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longi` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ph` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sel` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temp_in` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temp_out` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "co2",
DROP COLUMN "humidity",
DROP COLUMN "phos",
DROP COLUMN "potass",
DROP COLUMN "temp",
ADD COLUMN     "Potass" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "cond" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "gaz_1" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "gaz_2" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "gaz_3" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "gaz_4" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "humi_in" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "humi_out" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lati" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longi" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ph" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sel" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "temp_in" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "temp_out" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "nitrate" SET DATA TYPE DOUBLE PRECISION;
