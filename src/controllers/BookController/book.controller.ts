import { Request,Response } from 'express'
import { AppDataSource } from '../../config/data.source'
import { BooksEntity } from '../../models'


export const saveBook = async (req:Request,resp:Response) =>{
    try {
        const bookRepository = AppDataSource.getRepository(BooksEntity);

        const data = await bookRepository.save(req.body)

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

export const allBooks = async (req:Request,resp:Response) =>{
    try {
        const bookRepository = AppDataSource.getRepository(BooksEntity);

        const bookQuery = bookRepository.createQueryBuilder("Books")
        .innerJoinAndSelect('Books.author','Authors')
        .innerJoinAndSelect('Books.publisher','Publishers')
        .innerJoinAndSelect('Books.genre','Genres')

        const data = await bookQuery.getMany();

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

export const getBookById = async (req:Request,resp:Response) =>{
    try {
        const { id } = req.params;
        let idbook = parseInt(id,10);

        const bookRepository = AppDataSource.getRepository(BooksEntity);

        const bookQuery = bookRepository.createQueryBuilder("Books")
        .innerJoinAndSelect('Books.author','Authors')
        .innerJoinAndSelect('Books.publisher','Publishers')
        .innerJoinAndSelect('Books.genre','Genres')
        .where({ id : idbook})

        const data = await bookQuery.getMany();

        if(data.length === 0){
            return resp.status(400).json({
                status:false,
                message:`El id:${idbook} no existe`
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