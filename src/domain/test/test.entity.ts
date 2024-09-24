import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TestQuestion } from "../test-question/test-question.entity";

@Entity('Test')
export class Test {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'uuid', nullable: false})
    uuid: string;

    @Column({type: 'int', nullable: false})
    creator: number;

    @Column({type: 'varchar', length: 30, unique: true})
    title: string;

    @Column({type: 'varchar', length: 255})
    instruction: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp'})
    deleted_at: Date;

    @OneToMany(()=> TestQuestion, (test_question) => test_question.test_id)
    test_questions: TestQuestion[]
}