import { check } from 'express-validator'
import { validaterrors } from '../middleware'


export const uservalidation = [
    check('username').trim().notEmpty().withMessage('El campo username no es vacio !!')
]
