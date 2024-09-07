import { DataSource } from "typeorm"
import { UserEntity,ReviewsEntity,GenresEntity,AuthorsEntity,PublisherEntity, BooksEntity } from "../models";
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mssql",
    host: process.env.HOST,
    port: process.env.PORTDB ? parseInt(process.env.PORTDB) : undefined,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB,
    entities:[UserEntity,ReviewsEntity,BooksEntity,GenresEntity,AuthorsEntity,PublisherEntity],
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
})