import { Router } from 'express'
import { bookvalidation } from '../../validators';
import { allBooks } from '../../controllers';
export const bookRoutes = Router();

bookRoutes.post('/save',bookvalidation)
bookRoutes.get('/all',allBooks)