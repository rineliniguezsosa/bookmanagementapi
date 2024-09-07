import { Router } from 'express';
import { getAllBookGenres, saveBookGenre, getBookGenresById } from '../../controllers';
import { bookgenrevalidation,genrebyidvalidation } from '../../validators';

export const bookgenresRoutes = Router();

bookgenresRoutes.post('/save',bookgenrevalidation,saveBookGenre)
bookgenresRoutes.get('/all',getAllBookGenres)
bookgenresRoutes.get('/:id',genrebyidvalidation,getBookGenresById)