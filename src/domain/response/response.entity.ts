import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from '../user/user.entity'
import { TestQuestion } from '../test-question/test-question.entity'

@Entity('Response')
export class Response {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:'uuid'})
    uuid: string

    @Column({type:'int'})
    applicant_id: number

    @Column({type:'varchar', length:'255'})
    response: string

    @Column({type:'int'})
    marks: number

    @Column({type:'boolean'})
    correct: boolean

    @Column({type: 'int'})
    test_question_id: number

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp'})
    deleted_at: Date;
    
    @ManyToOne(() => User, (user) => user.responses)
    @JoinColumn({ name: 'applicant_id' })
    applicant: User;

    @OneToOne(()=> TestQuestion, (test_question) => test_question.id)
    test_question: TestQuestion
}