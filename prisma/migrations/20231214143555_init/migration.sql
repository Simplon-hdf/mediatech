-- CreateTable
CREATE TABLE "HumanInformations" (
    "humanInformation_UUID" VARCHAR(36) NOT NULL,
    "first_name" VARCHAR(20) NOT NULL,
    "last_name" VARCHAR(30) NOT NULL,

    CONSTRAINT "humaninformations_humaninformation_uuid" PRIMARY KEY ("humanInformation_UUID")
);

-- CreateTable
CREATE TABLE "Authors" (
    "author_UUID" VARCHAR(36) NOT NULL,
    "humanInformation_UUID" TEXT NOT NULL,

    CONSTRAINT "authors_author_uuid" PRIMARY KEY ("author_UUID")
);

-- CreateTable
CREATE TABLE "Borrowers" (
    "borrower_UUID" VARCHAR(36) NOT NULL,
    "humanInformation_UUID" TEXT NOT NULL,

    CONSTRAINT "borrowers_borrower_uuid" PRIMARY KEY ("borrower_UUID")
);

-- CreateTable
CREATE TABLE "Employees" (
    "employee_UUID" VARCHAR(36) NOT NULL,
    "humanInformation_UUID" TEXT NOT NULL,
    "mail_address" VARCHAR(80) NOT NULL,
    "password" VARCHAR(72) NOT NULL,

    CONSTRAINT "employees_employee_uuid" PRIMARY KEY ("employee_UUID")
);

-- CreateTable
CREATE TABLE "Borrows" (
    "borrow_UUID" VARCHAR(36) NOT NULL,
    "status" INTEGER NOT NULL,
    "started_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3),
    "employee_UUID" TEXT NOT NULL,
    "borrower_UUID" TEXT NOT NULL,

    CONSTRAINT "borrows_borrow_uuid" PRIMARY KEY ("borrow_UUID")
);

-- CreateTable
CREATE TABLE "Books" (
    "book_UUID" VARCHAR(36) NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "description" TEXT NOT NULL,
    "author_UUID" TEXT NOT NULL,
    "borrow_UUID" TEXT,

    CONSTRAINT "books_book_uuid" PRIMARY KEY ("book_UUID")
);

-- CreateIndex
CREATE UNIQUE INDEX "HumanInformations_humanInformation_UUID_key" ON "HumanInformations"("humanInformation_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Authors_author_UUID_key" ON "Authors"("author_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Borrowers_borrower_UUID_key" ON "Borrowers"("borrower_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_employee_UUID_key" ON "Employees"("employee_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Borrows_borrow_UUID_key" ON "Borrows"("borrow_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Books_book_UUID_key" ON "Books"("book_UUID");

-- AddForeignKey
ALTER TABLE "Authors" ADD CONSTRAINT "Authors_humanInformation_UUID_fkey" FOREIGN KEY ("humanInformation_UUID") REFERENCES "HumanInformations"("humanInformation_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrowers" ADD CONSTRAINT "Borrowers_humanInformation_UUID_fkey" FOREIGN KEY ("humanInformation_UUID") REFERENCES "HumanInformations"("humanInformation_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_humanInformation_UUID_fkey" FOREIGN KEY ("humanInformation_UUID") REFERENCES "HumanInformations"("humanInformation_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrows" ADD CONSTRAINT "employee_fk" FOREIGN KEY ("employee_UUID") REFERENCES "Employees"("employee_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrows" ADD CONSTRAINT "borrower_fk" FOREIGN KEY ("borrower_UUID") REFERENCES "Borrowers"("borrower_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "author_fk" FOREIGN KEY ("author_UUID") REFERENCES "Authors"("author_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "borrow_fk" FOREIGN KEY ("borrow_UUID") REFERENCES "Borrows"("borrow_UUID") ON DELETE SET NULL ON UPDATE CASCADE;
