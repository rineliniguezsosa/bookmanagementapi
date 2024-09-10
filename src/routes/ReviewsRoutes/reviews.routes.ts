import { Router } from 'express';
import { reviewvalidation } from '../../validators';

export const reviewRoutes = Router();

reviewRoutes.post('/save',reviewvalidation)