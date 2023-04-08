import express from "express";


const router = express.Router();

import {
    // login,
    register,
    // infoUser,
    // refreshToken,
    // logout,
} from "../controllers/auth.controller.js";

import { validatorExpress } from "../middlewares/validatorExpress.js";
import { body } from "express-validator";

router.post('/register',
    [
        body("nombre", "faltan ingresar datos").trim().isLength({ min: 1 }),
        body("usuario", "faltan ingresar datos").trim().isLength({ min: 1 }),
        body("pass", "minimo 6 caracteres").trim().isLength({ min: 6 }),
        // body("rol", "minimo 4 caracteres").trim().isLength({ min: 4 }),
        // body("pass", "Formato de pass incorrecto").custom(
        //     (value, { req }) => {
        //         if (value !== req.body.re_pass) {
        //             throw new Error("No coinciden las pass")
        //         }
        //         return value;
        //     }
        // ),
        body("email", "Formato email incorrecto").trim().isEmail().normalizeEmail(),

    ],
    validatorExpress,
    // existsUserInBD,
    register
)




// router.post('/login',
//     [
//         body("usuario", "minimo 4 letras").trim().isLength({ min: 4 }),
//         body("usuario", "maximo 20 letras").trim().isLength({ max: 20 }),
//         body("pass", "minimo 6 caracteres").trim().isLength({ min: 6 }),
//         body("pass", "maximo 20 caracteres").trim().isLength({ max: 20 }),
//     ],
//     validatorExpress,
//     login
// )



// router.delete('/deleteUser/:id', requiereToken, existsUserInBD, authController.deleteUser)


// router.get('/info', requiereToken, authController.info)

// router.get('/getAll', requiereToken, authController.getAllUser)

// router.get('/refreshToken', requireRefreshToken, authController.refreshToken)

// router.get('/logout', authController.logout)



export default router;