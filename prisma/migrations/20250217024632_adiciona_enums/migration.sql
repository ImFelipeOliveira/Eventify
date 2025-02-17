/*
  Warnings:

  - Added the required column `sexo` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pessoa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sexo" TEXT NOT NULL,
    "responsavelId" INTEGER,
    CONSTRAINT "Pessoa_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "Pessoa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pessoa" ("id", "responsavelId") SELECT "id", "responsavelId" FROM "Pessoa";
DROP TABLE "Pessoa";
ALTER TABLE "new_Pessoa" RENAME TO "Pessoa";
CREATE TABLE "new_Registration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "eventId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Registration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Registration" ("createdAt", "eventId", "id", "updatedAt") SELECT "createdAt", "eventId", "id", "updatedAt" FROM "Registration";
DROP TABLE "Registration";
ALTER TABLE "new_Registration" RENAME TO "Registration";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
