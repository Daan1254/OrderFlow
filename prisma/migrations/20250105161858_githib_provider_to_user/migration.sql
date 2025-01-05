/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LoginProvider" AS ENUM ('GITHUB');

-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified",
DROP COLUMN "name",
DROP COLUMN "password",
ADD COLUMN     "loginProvider" "LoginProvider" NOT NULL DEFAULT 'GITHUB';

-- CreateIndex
CREATE UNIQUE INDEX "Store_slug_key" ON "Store"("slug");
