import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Category } from "./category";
@Entity("videos")
export class Video{
    @PrimaryColumn()
    id : string;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    duration : number;

    @Column()
    category_id: string;
    
    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id"})
    category: Category;

    constructor(){
        if(!this.id){ 
            this.id = uuid();
        }
    }
}

