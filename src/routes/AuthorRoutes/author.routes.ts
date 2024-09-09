import { Router } from 'express';
import { authorvalidation } from '../../validators';
import { getAllBookAuthors, getBookAuthorById } from '../../controllers';
export const authorRoutes = Router() 

authorRoutes.post('/save',authorvalidation)
authorRoutes.get("/all",getAllBookAuthors)
authorRoutes.get('/:id',getBookAuthorById)