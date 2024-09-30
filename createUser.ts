import { PrismaClient } from '@prisma/client';
import {Request, Response } from 'express';


const prisma = new PrismaClient()

export default{
    async user(req: Request, res: Response){
        try{
            const {name, email,senha,idade, cidade, estado} = req.body;
            const userExists = await prisma.user.findUnique({ where: {email}});

            if(userExists){
                return res.json({error: true, message: 'Erro, usuário existente!'});
            }

    
            const user = await prisma.user.create({
            data:{
            name,
            email,
            idade, 
            senha,     
            cidade,  
            estado,}
            });

            return res.json({error: false,message: 'Sucesso: Usuário cadastrado com sucesso!', user});

        }

        catch(error){
                if (error instanceof Error) {
                  res.status(500).json({ error: error.message });
                } else {
                  res.status(500).json({ error: "Erro desconhecido ao buscar usuários" });
                }
              
        }
    }


}