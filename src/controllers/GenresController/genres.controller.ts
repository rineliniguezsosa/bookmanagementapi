import { Request,Response } from 'express';
import { AppDataSource } from '../../config/data.source';
import { GenresEntity } from '../../models';

export const saveBookGenre = async(req:Request,resp:Response) =>{
    try {
        const genresRepository = AppDataSource.getRepository(GenresEntity);

        const data = await genresRepository.save(req.body)

        resp.status(200).json({
            status:true,
            menssage:data
        })
    } catch (error) {
        console.log(error);
        
        resp.status(400).json({
            status:false,
            message:'Porfavor vuelva a intentar, algo salio mal :('
        })
    }
}

export const getAllBookGenres = async(req:Request,resp:Response) =>{
    try {
        const genresRepository = AppDataSource.getRepository(GenresEntity);

        const data = await genresRepository.find();

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

export const getBookGenresById = async(req:Request,resp:Response) =>{
    try {
        const { id } = req.params
        let idbookgenre = parseInt(id,10)

        const genresRepository = AppDataSource.getRepository(GenresEntity);

        const data = await genresRepository.find({ where: { id: idbookgenre }})

        if(!data){
         throw new Error(`El id:${idbookgenre} proporcionado no existe`)
        }
    } catch (error) {
        
    }
}