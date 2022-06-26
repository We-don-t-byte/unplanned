/*
  Warnings:

  - A unique constraint covering the columns `[mapsId]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mapsId` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "mapsId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Store_mapsId_key" ON "Store"("mapsId");
