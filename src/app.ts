import express, { Application } from "express";
import cors from "cors";
import {corsOptions} from "./config/cors";
import dotenv from "dotenv";
//importar apiRoutes de "./routes/api.routes";
//importar baseRoutes de "./routes/base.routes";

//------------------------------------------------------

dotenv.config();

const app: Application = express();

//Middleware
app.use(express.json());
app.use(cors(corsOptions));

//Las Routes
//app.get('/',baseRoutes);  //baseRoutes no definidas
//app.use('/api',apiRoutes);  //apiRoutes no definidas

export default app;