import {db} from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req,res)=>{

    //CHEQUEO DE EXISTENCIA DE USUARIO

    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q,[req.body.email, req.body.name], (err,data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("Usuario existente!");

        //Proteccion de contraseña y cracion de usuario

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username,
        ]

    });

};

export const login = (req,res)=>{ };

export const logout = (req,res)=>{ };