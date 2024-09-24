import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Test } from "../test/test.entity";
import { Question } from "../question/question.entity";

@Entity('TestQuestion')
export class TestQuestion {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"uuid"})
    uuid: string

    @Column({type:"boolean"})
    optional: boolean

    @Column({type:'int'})
    test_id: number

    @Column({type:'int'})
    question_id: number

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp'})
    deleted_at: Date;

    @ManyToOne(()=> Test, (test)=> test.id)
    @JoinColumn({name: 'test_id'})
    test: Test

    @ManyToOne(()=> Question, (question) => question.id)
    @JoinColumn({name: 'question_id'})
    question: Question
}