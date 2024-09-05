import { check } from 'express-validator'
import { validaterrors } from '../middleware'


export const uservalidation = [
    check('username').toLowerCase().trim().notEmpty().withMessage('El campo username no es vacio !!'),
    check('username').isAlpha().withMessage('El campo username solo acepta letras !!'),
    check('email','El campo debe de estar en un formato valido de email').isEmail()
]
