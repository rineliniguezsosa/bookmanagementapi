import { AppDataSource } from "./data.source";


export const connectdb = async() =>{
    try {
        await AppDataSource.initialize();
        console.log('connect to sql server database');
    } catch (error) {
        console.error('error to connect',error);
    }
}