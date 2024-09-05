import { check } from 'express-validator'
import { validaterrors } from '../middleware'


export const uservalidation = [
    check('username').toLowerCase().trim().notEmpty().withMessage('El campo username no es vacio !!'),
    check('username').isAlpha().withMessage('El campo username solo acepta letras !!'),
    check('username','El campo debe de tener una longitud de 10 caracteres como minimo').isLength({min:10}),
    check('email','El campo debe de estar en un formato valido de email').isEmail(),
    check('email','El campo email no es vacio !!').notEmpty()
]
