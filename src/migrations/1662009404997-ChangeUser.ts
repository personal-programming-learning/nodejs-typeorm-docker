import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUser1662009404997 implements MigrationInterface {
    name = 'ChangeUser1662009404997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phone\` varchar(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('USER', 'CUSTOMER', 'ADMIN') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phone\``);
    }

}
