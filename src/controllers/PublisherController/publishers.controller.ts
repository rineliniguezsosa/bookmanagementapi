import { Request,Response } from 'express'
import { AppDataSource } from '../../config/data.source'
import { PublisherEntity } from '../../models'

export const saveBookPublishers = async (req:Request,resp:Response) =>{
    try {
        const publisherRepository = AppDataSource.getRepository(PublisherEntity);

        const data = await publisherRepository.save(req.body);

        resp.status(200).json({
            status:true,
            message:data
        })
    } catch (error) {
        
    }
}