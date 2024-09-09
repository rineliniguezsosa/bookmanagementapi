import { Router } from 'express';
import { publishersvalidation } from '../../validators';
import { getAllBookPublishers, saveBookPublishers } from '../../controllers';
export const publisherRoutes = Router()

publisherRoutes.post('/save',publishersvalidation,saveBookPublishers)
publisherRoutes.get('/all',getAllBookPublishers)