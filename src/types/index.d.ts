import { TokenData } from "./types";

declare global {

//Express
    namespace Express {
        export interface Request {

//definir el tokendata

        tokenData:{
        userId:number;
        userRole:string;
        }
    }
}
}