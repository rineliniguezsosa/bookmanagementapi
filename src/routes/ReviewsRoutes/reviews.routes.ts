import { Router } from 'express';
import { reviewvalidation } from '../../validators';
import { saveBookReview } from '../../controllers';

export const reviewRoutes = Router();

reviewRoutes.post('/save',reviewvalidation,saveBookReview)