import { SeederConfig } from "../../config/seeders";
import { Seeder } from "./seeder";
import { Artist } from "../../models/Artist";
import { User } from "../../models/User";
import { getRandomValueFromArray } from "../../helpers/common";
import { ArtistFactory } from "../factories/ArtistFactory";


export class ArtistSeeder extends Seeder{
    protected async generate():Promise <void>{
        const {ARTISTS} = SeederConfig;

        const users = await User.find(
            {
                where:{
                    role:{
                        id:2
                    }
                }
            }
        );
        const artists = new ArtistFactory().createMany(ARTISTS);
        const newArtists: User[] = []
        artists.forEach((artist: { user: User; }) =>{
            const user = users.pop()
            if(user) 
                return artist.user = user
            }
        )
        await Artist.save(artists);
    }
}