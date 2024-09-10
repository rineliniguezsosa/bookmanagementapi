import { Request,Response } from 'express'
import { AppDataSource } from '../../config/data.source'
import { ReviewsEntity } from '../../models'

export const saveBookReview = async (req:Request,resp:Response) =>{
    try {
        const reviewsRepository = AppDataSource.getRepository(ReviewsEntity);

        const data = await reviewsRepository.save(req.body)

        return resp.status(200).json({
            status:true,
            menssage:data
        })
    } catch (error) {
        console.log(error);
        
        return resp.status(400).json({
            status:false,
            message:'Porfavor vuelva a intentar, algo salio mal :('
        })   
    }
}