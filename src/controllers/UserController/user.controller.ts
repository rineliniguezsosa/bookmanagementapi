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

        resp.status(400).json({
            status:false,
            message:'Porfavor vuelva a intentar, algo salio mal :('
        })
        
    }
}

export const getAllUsers = async(req:Request,resp:Response) =>{
    try {
        const userRepository = AppDataSource.getRepository(UserEntity);

        const data = await userRepository.find();

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

export const getUserById = async(req:Request,resp:Response) =>{
    try {
        const { id } = req.params
        let iduser = parseInt(id,10)

        const userRepository = AppDataSource.getRepository(UserEntity);

        const data = await userRepository.find({ where: { id: iduser  }})
        
        if(data.length === 0){
          return resp.status(400).json({
            status:false,
            message:`El id:${iduser} no existe`
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