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

export const allBooksReviews = async (req:Request,resp:Response) =>{
    try {
        const reviewsRepository = AppDataSource.getRepository(ReviewsEntity);

        const bookreviewsQuery = reviewsRepository.createQueryBuilder("Reviews")
        .innerJoinAndSelect('Reviews.books','Books')
        .innerJoinAndSelect('Reviews.user','Users')

        const data = await bookreviewsQuery.getMany();

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

export const getBooksReviewById = async (req:Request,resp:Response) =>{
    try {
        const { id } = req.params;
        let idbookreview = parseInt(id,10);

        const reviewsRepository = AppDataSource.getRepository(ReviewsEntity);

        const bookreviewsQuery = reviewsRepository.createQueryBuilder("Reviews")
        .innerJoinAndSelect('Reviews.books','Books')
        .innerJoinAndSelect('Reviews.user','Users')
        .where({ id: idbookreview })

        const data = await bookreviewsQuery.getMany();

        if(data.length === 0){
            return resp.status(400).json({
                status:false,
                message:`El id:${idbookreview} no existe`
            })
        }

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