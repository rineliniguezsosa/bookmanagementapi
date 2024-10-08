import { Request,Response } from 'express'
import { AppDataSource } from '../../config/data.source'
import { AuthorsEntity } from '../../models'

export const saveBookAuthor = async(req:Request,resp:Response) =>{
    try {
        const authorRepository = AppDataSource.getRepository(AuthorsEntity);

        const data = await authorRepository.save(req.body);

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

export const getAllBookAuthors = async(req:Request,resp:Response) =>{
    try {
        const authorRepository = AppDataSource.getRepository(AuthorsEntity);

        const data = await authorRepository.find();

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

export const getBookAuthorById = async(req:Request,resp:Response) =>{
    try {
        const { id } = req.params
        let idbookauthor = parseInt(id,10)

        const authorRepository = AppDataSource.getRepository(AuthorsEntity);

        const data = await authorRepository.find({ where: { id: idbookauthor   }})
        
        if(data.length === 0){
          return resp.status(400).json({
            status:false,
            message:`El id:${idbookauthor } no existe`
          })
        }

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