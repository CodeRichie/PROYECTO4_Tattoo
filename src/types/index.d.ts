import { TokenData } from "./types";

declare global {
    namespace Express {
        export interface Request {
            tokenData: TokenData;
        }
    }
}



// import { TokenData } from "./types";

// declare global {
//     //Express
//     namespace Express {
//         export interface Request {
//             //definition of the atributte tokenData fot the request
//             tokenData:{
//                 userId:number;
//                 userRole:string;
//             }
//         }
//     }
// }

