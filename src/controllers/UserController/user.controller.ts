import { Request,Response } from 'express';
import { UserEntity } from '../../models';
import { AppDataSource } from '../../config/data.source';


export const saveUser = async(req:Request,resp:Response) =>{
    const data = req.body;
    try {
        const userRepository = AppDataSource.getRepository(UserEntity);

        await userRepository.save(data)

        resp.status(200).json({
            status:true,
            message:data
        })
    } catch (error) {
        console.log(error);
        
    }
}