import { getRepository } from "typeorm";
import { Category } from "../entities/category";
import { Video } from "../entities/Video";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService{
    async execute({ 
        name, 
        description, 
        duration, category_id
    }:VideoRequest) : Promise<Video | Error> {
        const repo = getRepository(Video);
        const repoCat = getRepository(Category);


        if (!await repoCat.findOne(category_id)){
            return new Error(`Category not found`);

        }
        if (await repo.findOne({name})) {
            return new Error(`Video already exists`);
        }
        const video = await repo.create({
            name,
            description,
            duration,
            category_id
        })

        await repo.save(video);

        return video;
    }

}