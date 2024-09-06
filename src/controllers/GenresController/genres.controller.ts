import { Request,Response } from 'express';
import { AppDataSource } from '../../config/data.source';
import { GenresEntity } from '../../models';

export const saveBookGenre = async(req:Request,resp:Response) =>{
    try {
        const genresRepository = AppDataSource.getRepository(GenresEntity);
    } catch (error) {
        
    }
}