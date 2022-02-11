import { getRepository } from "typeorm";
import { Category } from "../entities/category";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService{
    async execute({ name, description}:CategoryRequest) : Promise<Category | Error> {
        const repo = getRepository(Category);

        // select * from categories where name = "name"
        if (await repo.findOne({name})) {
            return new Error(`Category already exists`);
        }
        const category = await repo.create({
            name,
            description
        })

        await repo.save( category);

        return category;
    }

}