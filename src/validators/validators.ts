import { body } from 'express-validator'
import { validaterrors } from '../middleware'


export const uservalidation = [
    body('username')
        .trim()
        .customSanitizer(value => value.toLowerCase())  // Transformar a minúsculas
        .notEmpty().withMessage('El campo username es requerido !!')
        .isAlpha().withMessage('El campo username solo acepta letras !!')
        .isLength({ max: 10 }).withMessage('El campo username debe de tener una longitud de 10 caracteres como minimo'),
    body('email')
        .notEmpty().withMessage('El campo email es requerido !!')
        .isEmail().withMessage('El campo debe de estar en un formato valido de email'),
    body('password')
        .notEmpty().withMessage('El campo password es requerido !!')
        .isLength({ max: 10 }).withMessage('El campo password debe de tener una longitud de 10 caracteres como minimo'),
    validaterrors
]

export const bookgenrevalidation = [
    body('name')
        .trim()
        .customSanitizer(value => value.toLowerCase())
        .notEmpty().withMessage('El campo name es requerido !!')
        .isAlpha().withMessage('El campo name solo acepta letras !!')
        .isLength({ max: 50 }).withMessage('El campo name debe de tener una longitud de 50 caracteres como minimo'),
    body('description')
        .trim()
        .optional()
        .isAlpha().withMessage('El campo description solo acepta letras !!')
]

export const genrebyidvalidation = [
    body('id')
        .trim()
        .isNumeric().withMessage('El campo id debe contener solo números')
        .notEmpty().withMessage('El campo id debe de ser requerido')
] 

export const authorvalidation = [
    body('firstname')
        .trim()
        .customSanitizer(value => value.toLowerCase())
        .notEmpty().withMessage('El campo firstname es requerido !!')
        .isAlpha().withMessage('El campo firstrname solo acepta letras !!')
        .isLength({ max: 50 }).withMessage('El campo firstname debe de tener una longitud de 50 caracteres como minimo'),
    body('lastname')
        .trim()
        .customSanitizer(value => value.toLowerCase())
        .notEmpty().withMessage('El campo lastname es requerido !!')
        .isAlpha().withMessage('El campo  lastname solo acepta letras !!')
        .isLength({ max: 50 }).withMessage('El campo lastname debe de tener una longitud de 50 caracteres como minimo'),
    body('birthdate')
        .trim()
        .optional()
        .isDate({ format:'YYYY-MM-DD'}).withMessage('El campo birthdate necesita de un formato Año/Mes/Dia'),
    body('nationality')
        .trim()
        .optional()
        .isLength({ max: 50 }).withMessage('El campo nationality debe de tener una longitud de 50 caracteres como minimo')
        .isAlpha().withMessage('El campo nationality solo acepta letras !!')
]

export const publishersvalidation = [
    body('name')
        .trim()
        .customSanitizer(value => value.toLowerCase())
        .isLength({ max: 30 }).withMessage('El campo name debe de tener una longitud de 30 caracteres como minimo')
        .notEmpty().withMessage('El campo name es requerido !!')
        .isAlpha().withMessage('El campo name solo acepta letras !!'),
    body('country')
        .trim()
        .optional()
        .customSanitizer(value => value.toLowerCase())
        .isLength({ max: 50 }).withMessage('El campo country debe de tener una longitud de 50 caracteres como minimo')
        .isAlpha().withMessage('El campo country solo acepta letras !!'),
    body('established_year')
        .optional()
        .isInt({min:1980,max:2024}).withMessage('Establece un año valido entre 1980 y 2024')
]

export const bookvalidation = [
    body('title')
        .trim()
        .isLength({ max: 150 }).withMessage('El campo title debe de tener una longitud de 150 caracteres como minimo')
        .notEmpty().withMessage('El campo title es requerido !!'),
    body('isbn')
        .trim()
        .isLength({ min: 20}).withMessage('El campo isbn debe de tener una longitud minima de 20 caracteres')
        .notEmpty().withMessage('El campo isbn es requerido !!'),
    body('publication_date ')
        .trim()
        .optional()
        .isDate({ format:'YYYY-MM-DD'}).withMessage('El campo publication-date necesita de un formato Año/Mes/Dia '),
    body('number_of_pages')
        .optional()
        .isNumeric().withMessage('El campo id debe contener solo números'),
    body('author_id')
        .isNumeric().withMessage('El campo author_id debe contener solo números')
        .notEmpty().withMessage('El campo author_id es requerido !!'),
    body('publisher_id')
        .isNumeric().withMessage('El campo publisher_id debe contener solo números')
        .notEmpty().withMessage('El campo publishers_id es requerido !!'),
    body('genre_id')
        .isNumeric().withMessage('El campo genre_id debe contener solo números')
        .notEmpty().withMessage('El campo genre_id es requerido !!'),
]