import { Router } from 'express';
import { saveBookGenre } from '../../controllers';
export const genresRoutes = Router();

genresRoutes.post('/save',saveBookGenre)