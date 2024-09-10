import { Router } from 'express';
import { reviewvalidation } from '../../validators';
import { allBooksReviews, saveBookReview } from '../../controllers';

export const reviewRoutes = Router();

reviewRoutes.post('/save',reviewvalidation,saveBookReview)
reviewRoutes.get('/all',allBooksReviews)