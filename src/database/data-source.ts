import "reflect-metadata";
import { DataSource } from "typeorm";
import 'dotenv/config'
import { CreateRolesTable1710438444188 } from "./migrations/1710438444188-CreateRolesTable";
import { User } from "./../models/User";
import { CreateUsersTable1710438501972 } from "./migrations/1710438501972-CreateUsersTable";
import { Tattoo_artist } from "../models/Tattoo_artists";
import { CreateTattoosTable1710439346161 } from "./migrations/1710439346161-CreateTattoosTable";
import { CreateArtistsTable1710439371929 } from "./migrations/1710439371929-CreateArtistsTable";
import { CreateAppointmentsTable1710439397743 } from "./migrations/1710439397743-CreateAppointmentsTable";
import { Tattoo } from "../models/Tattoo";
import { Appointment } from "../models/Appointment";

type database = "mysql" 

const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as database,
  host: process.env.DB_HOST,
  port: 3307,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Tattoo_artist, Tattoo, Appointment],
  migrations: [
    CreateRolesTable1710438444188,
    CreateUsersTable1710438501972,
    CreateTattoosTable1710439346161,
    CreateArtistsTable1710439371929,
    CreateAppointmentsTable1710439397743

  ],
  synchronize: false,
  logging: false,
});

export default AppDataSource;
// export { AppDataSource }