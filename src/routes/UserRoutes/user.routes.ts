import { Router } from 'express';
import { saveUser } from '../../controllers';

export const userRoutes = Router()

userRoutes.post('/save',saveUser)