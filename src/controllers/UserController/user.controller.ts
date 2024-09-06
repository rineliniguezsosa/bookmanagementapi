import { Request,Response } from 'express';
import { UserEntity } from '../../models';
import { AppDataSource } from '../../config/data.source';
import bcrypt from 'bcrypt';


export const saveUser = async(req:Request,resp:Response) =>{
    try {
        const { username,email,password } = req.body;
    
        const salt = bcrypt.genSaltSync(parseInt(`${process.env.SECRET}`))
        const newpassword = bcrypt.hashSync(password,salt);

        const userRepository = AppDataSource.getRepository(UserEntity);

        const data = await userRepository.save({username,email,newpassword})

        resp.status(200).json({
            status:true,
            message:data
        })
    } catch (error) {
        console.log(error);
        
    }
}