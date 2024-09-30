import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default {
    async getUserByName(req: Request, res: Response) {
        try {
            const name = req.params.name; 
            const user = await prisma.user.findMany({
                where: { name: name },
            });
            if (user.length !== 0) { // Verificar se algum usuario foi encontrado
                res.json(user);
            } else {
                res.status(404).json({ error: 'Nenhum usuário encontrado com o nome especificado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar usuários por nome' });
        }
    }
}









