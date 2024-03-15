import { Request,Response } from "express";
import { User } from "../models/User";
import { Appointment } from "../models/Appointment";
import { Artist } from "../models/Artist";
import { Client } from "../models/Client";
import { Role } from "../models/Role";
import bcrypt from 'bcrypt';
import { UserRoles } from "../constants/UserRoles";

export const userController = {
    //Registro
    async create(req:Request,res:Response){
        try {
            const {firstName,lastName,email,phone,password,isActive,} = req.body;
            const hashedPassword = await bcrypt.hash(password,10);
            
            const user = User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                password:hashedPassword,
                isActive:isActive,
                role:UserRoles.CLIENT

            });
            await user.save();


            res.status(200).json({message:"User created successfully"});
        }catch(error){
            console.error(error);
            res.status(500).json({message:"Something went wrong"});
        }
    },

    //Editar el perfil
    async update(req:Request,res:Response){
        try {
            const userId = Number(req.params.id);
            const {firstName,lastName,email,phone,password,isActive} = req.body;
            const user = await User.findOne({where:{id:userId}});
                
            if(!user){
                res.status(404).json({message:"User not found"});
                return;
            }
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.phone = phone;
            user.password = password;
            user.isActive = isActive;
            await user.save();
            res.status(200).json({message:"User updated successfully"});
        }catch(error){
            res.status(500).json({message:"Something went wrong"});
        }
    },




    //FIXME: SOLO para los ADMINISTRADORES
    //Get all Users Profile
    async getAll(req:Request,res:Response){
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;

            const [users,totalUsers] = await User.findAndCount(
                {
                    select:{
                        id:true,
                        firstName:true,
                        lastName:true,
                        email:true,
                        phone:true,
                        isActive:true,
                        
                    }
                }
            );
            res.json(users);
        }catch(error){
            res.status(500).json({message:"Something went wrong"});
        }
    },

    //Get User Profile por ID
    async getProfileById(req:Request,res:Response){
        try {
            const userId = Number(req.params.id);
   
            const user = await User.findOne({
               relations: {
                  role: true,
               },
               where: { id: userId },
            });

           

            if (!user) {
               res.status(404).json({ message: "User not found" });
               return;
            }
   
            res.json(user);
         } catch (error) {
            
            res.status(500).json({
               message: "Failed to retrieve user",
            });
         }
    },

    //Eliminar perfil
    async delete(req:Request,res:Response){
        try {
            //coger la id de la peticion
            const userId = Number(req.params.id);
            //localizar el usuario por id
            const user = await User.findOne({where:{id:userId}});
            //si no encuentra usuario devuelve el estado 404
            if(!user){
                res.status(404).json({message:"User not found"});
                return;
            }
            //eliminar usuario
            await user.remove();
            //devolver a estado 200
            res.status(200).json({message:"User deleted successfully"});
        }catch(error){
            console.error(error);
            //Si hay un error, va hacer un estado 500
            res.status(500).json({message:"Something went wrong"});
        }
    },
    
    async getLogedUser(req:Request,res:Response){
        try {
            const userId = req.tokenData?.userId;
            console.log(userId);
            const user = await User.findOne({
                relations:{
                    role:true
                },
                where:{
                    id:userId
                }
            });
            res.json(user).status(200).json({message:"User found successfully"});

        }catch(error){
            res.status(500).json({message:"Something went wrong"});
        }
    },

    async updateLogedUser(req:Request,res:Response){
        try {
            const userId = req.tokenData?.userId;
            const {firstName,lastName,email,phone,isActive} = req.body;
            const user = await User.findOne({where:{id:userId}});

            if(!user){
                res.status(404).json({message:"User not found"});
                return;
            }

            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.phone = phone;
            user.isActive = isActive;

            await user.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({message:"Something went wrong"});
        }
    },

    async editUserRole(req:Request,res:Response){
        try{
            //coje el usuario por id
            const userId = Number(req.params.id);

            //coje el role id de la peticion
            const roleId = Number(req.body.roleId);
            
            //encuentra un usuario por id
            const userToChange = await User.findOne(
                {   
                    relations:{
                        role:true
                    },
                    select:{
                        id:true,
                        firstName:true,
                        role:{
                            id:true,
                        }
                    },
                    where:{
                        id:userId
                    }
                })
            //si no se encuentra al usuario, devuelve un estado 404
            if(!userToChange){
                res.status(404).json({message:"User not found"});
                return;
            }

            //cambiar el rol del usuario
            userToChange.role.id = roleId;
    
            //guardar el usuario en la database
            await User.save(userToChange);

            //devolver a estado 200
            res.status(200).json({message:"Role updated successfully"});

        }catch(error){
            console.log(error);
            res.status(500).json({message:"Something went wrong"});
        }
    }

}