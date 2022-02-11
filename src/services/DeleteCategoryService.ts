import { getRepository } from "typeorm";
import { Category } from "../entities/category";

export class DeleteCategoryService{
    async execute(id: string){
        const repo = getRepository(Category);

        if(!await repo.findOne(id)){
            return new Error("Category not found."); 
        }
        await repo.delete(id);
    }
}