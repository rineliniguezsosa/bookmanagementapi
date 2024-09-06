import { Router } from 'express';
import { authorvalidation } from '../../validators';
export const authorRoutes = Router() 

authorRoutes.post('/save',authorvalidation)