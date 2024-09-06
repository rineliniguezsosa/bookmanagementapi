import { Router } from 'express';
import { saveBookGenre } from '../../controllers';
export const bookgenresRoutes = Router();

bookgenresRoutes.post('/save',saveBookGenre)