import "reflect-metadata";
import { DataSource } from "typeorm";
import 'dotenv/config'
import { CreateUsersTable1710413745596 } from "./migrations/1710413745596-CreateUsersTable";
import { User } from "./../models/User";
import { CreateArtistsTable1710413782836 } from "./migrations/1710413782836-CreateArtistsTable";
import { Tattoo_artist } from "../models/Tattoo_artists";
import { CreateTattoosTable1710413796104 } from "./migrations/1710413796104-CreateTattoosTable";
import { CreateAppointmentsTable1710413832572 } from "./migrations/1710413832572-CreateAppointmentsTable";
import { Tattoo } from "./../models/Tattoo";
import { Appointment } from "../models/Appointment";

type database = "mysql" | "mariadb"

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as database,
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Tattoo_artist, Tattoo, Appointment],
  migrations: [
    CreateUsersTable1710413745596,
    CreateArtistsTable1710413782836,
    CreateTattoosTable1710413796104,
    CreateAppointmentsTable1710413832572
  ],
  synchronize: false,
  logging: false,
});

// export { AppDataSource }