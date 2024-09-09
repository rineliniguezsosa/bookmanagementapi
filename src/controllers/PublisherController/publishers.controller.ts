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
        console.log(error);
        
        resp.status(400).json({
            status:false,
            message:'Porfavor vuelva a intentar, algo salio mal :('
        })
    }
}

export const getAllBookPublishers = async(req:Request,resp:Response) =>{
    try {
        const publisherRepository = AppDataSource.getRepository(PublisherEntity);

        const data = await publisherRepository.find();

        return resp.status(200).json({
            status:true,
            message:data
        })
    } catch (error) {
        console.log(error);
        
        return resp.status(400).json({
            status:false,
            message:'Porfavor vuelva a intentar, algo salio mal :('
        })
    }
}