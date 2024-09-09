import { Router } from 'express'
import { bookvalidation } from '../../validators';
export const bookRoutes = Router();

bookRoutes.post('/save',bookvalidation)