import { check } from 'express-validator'
import { validaterrors } from '../middleware'


export const uservalidation = [
    check('username')
        .trim()
        .customSanitizer(value => value.toLowerCase())  // Transformar a minúsculas
        .notEmpty().withMessage('El campo username es requerido !!')
        .isAlpha().withMessage('El campo username solo acepta letras !!')
        .isLength({ max: 10 }).withMessage('El campo username debe de tener una longitud de 10 caracteres como minimo'),
    check('email')
        .notEmpty().withMessage('El campo email es requerido !!')
        .isEmail().withMessage('El campo debe de estar en un formato valido de email'),
    check('password')
        .notEmpty().withMessage('El campo password es requerido !!')
        .isLength({ max: 10 }).withMessage('El campo password debe de tener una longitud de 10 caracteres como minimo'),
    validaterrors
]

export const bookgenrevalidation = [
    check('name')
        .trim()
        .customSanitizer(value => value.toLowerCase())
        .notEmpty().withMessage('El campo name es requerido !!')
]