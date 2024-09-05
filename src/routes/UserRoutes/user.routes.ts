import { Router } from 'express';
import { saveUser } from '../../controllers';
import { uservalidation } from '../../validators';

export const userRoutes = Router()

userRoutes.post('/save',uservalidation,saveUser)