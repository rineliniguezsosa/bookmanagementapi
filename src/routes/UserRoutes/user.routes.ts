import { Router } from 'express';
import { saveUser, getAllUsers, getUserById } from '../../controllers';
import { uservalidation } from '../../validators';

export const userRoutes = Router()

userRoutes.post('/save',uservalidation,saveUser)
userRoutes.get('/all',getAllUsers)
userRoutes.get('/:id',getUserById)