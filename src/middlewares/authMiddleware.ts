import { NextFunction,Request,Response } from "express";
import jwt,{JwtPayload} from 'jsonwebtoken';
import dotenv from 'dotenv';

export const authMiddleware = (
    req:Request,
    res:Response,
    next:NextFunction
    ) => {
    
    // division del token en el header   
    const token = req.headers.authorization?.split(" ")[1];
    
    //si no hay token, devuelve un estado 401
    if(!token){
        res.status(401).json({message: "Unauthorized"});
        return;
    }

    try{
        //verificacion
        const decoded = jwt.verify(
            token, 
            process.env.JWT_SECRET as string
            ) as JwtPayload;

        //añadir el toquen  a la peticion
        req.tokenData = {
            userId: decoded.userId,
            userRole: decoded.userRole,
            }
        

        //llamar al middleware
        next();
        
    }catch(error){
        res.status(401).json({message: "Unauthorized"});
        
        return;
    }
    
}