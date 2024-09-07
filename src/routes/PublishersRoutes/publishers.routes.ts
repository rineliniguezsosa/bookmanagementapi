import { Router } from 'express';
import { publishersvalidation } from '../../validators';
export const publisherRoutes = Router()

publisherRoutes.post('/save',publishersvalidation)