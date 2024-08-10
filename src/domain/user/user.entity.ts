import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./enum/role.enum";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'uuid', nullable: false})
    uuid: string;

    @Column({type: 'varchar', length: 30, nullable: false})
    name: string;

    @Column({type: 'varchar', length: 30, unique: true})
    email: string;

    @Column({type: 'varchar', length: 255})
    password: string;

    @Column({type: 'enum', enum: Role, default: Role.STUDENT})
    role: Role;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp'})
    deleted_at: Date;

    // @OneToMany(() => Response, (Response)=> Response.userId)
    // @JoinColumn()
    // responses: Response[]
}