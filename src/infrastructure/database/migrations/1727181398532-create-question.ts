import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateQuestion1727181398532 implements MigrationInterface {
    name = 'CreateQuestion1727181398532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Question" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "options" text NOT NULL, "description" character varying(255) NOT NULL, "answer" character varying(255) NOT NULL, "weightage" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_1a855c8b4f527c9633c4b054675" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "TestQuestion" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "optional" boolean NOT NULL, "test_id" integer NOT NULL, "question_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_f84154d47b351c9052f27ef6224" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Test" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "creator" integer NOT NULL, "title" character varying(30) NOT NULL, "instruction" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_5684facefe09bab81f6a88e7a76" UNIQUE ("title"), CONSTRAINT "PK_257c543a36adff226a93de571a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Response" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "applicant_id" integer NOT NULL, "response" character varying(255) NOT NULL, "marks" integer NOT NULL, "correct" boolean NOT NULL, "test_question_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_bbace199655cd098b5d5e593f1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."User_role_enum" AS ENUM('STUDENT', 'ADMIN')`);
        await queryRunner.query(`CREATE TABLE "User" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "name" character varying(30) NOT NULL, "email" character varying(30) NOT NULL, "password" character varying(255) NOT NULL, "role" "public"."User_role_enum" NOT NULL DEFAULT 'STUDENT', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "TestQuestion" ADD CONSTRAINT "FK_273f1577ea7cec989219080ce40" FOREIGN KEY ("test_id") REFERENCES "Test"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TestQuestion" ADD CONSTRAINT "FK_35f6224cb76287f403c8fc0ba55" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Response" ADD CONSTRAINT "FK_e3818467cb123ae46ae9a8053b9" FOREIGN KEY ("applicant_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Response" DROP CONSTRAINT "FK_e3818467cb123ae46ae9a8053b9"`);
        await queryRunner.query(`ALTER TABLE "TestQuestion" DROP CONSTRAINT "FK_35f6224cb76287f403c8fc0ba55"`);
        await queryRunner.query(`ALTER TABLE "TestQuestion" DROP CONSTRAINT "FK_273f1577ea7cec989219080ce40"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TYPE "public"."User_role_enum"`);
        await queryRunner.query(`DROP TABLE "Response"`);
        await queryRunner.query(`DROP TABLE "Test"`);
        await queryRunner.query(`DROP TABLE "TestQuestion"`);
        await queryRunner.query(`DROP TABLE "Question"`);
    }

}
