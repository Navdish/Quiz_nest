import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1723295056935 implements MigrationInterface {
    name = 'CreateUser1723295056935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."User_role_enum" AS ENUM('STUDENT', 'ADMIN')`);
        await queryRunner.query(`CREATE TABLE "User" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "name" character varying(30) NOT NULL, "email" character varying(30) NOT NULL, "password" character varying(255) NOT NULL, "role" "public"."User_role_enum" NOT NULL DEFAULT 'STUDENT', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TYPE "public"."User_role_enum"`);
    }

}
