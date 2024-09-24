import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TestQuestion } from "../test-question/test-question.entity";

@Entity('Question')
export class Question {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:'uuid', nullable: false})
    uuid: string

    @Column({type:'simple-array'})
    options: string[]

    @Column({type:'varchar', length:'255'})
    description: string

    @Column({type: 'varchar', length:'255'})
    answer: string

    @Column({type:'int'})
    weightage: number

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp'})
    deleted_at: Date;

    @OneToMany(() => TestQuestion, (test_question) => test_question.question_id)
    test_questions: TestQuestion[]
}