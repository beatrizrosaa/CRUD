import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default {
    async getUserByEmail(req: Request, res: Response) {
        try {
            const email = req.params.email; 
            const user = await prisma.user.findUnique({
                where: { email: email },
            });
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar usuário pelo e-mail' });
        }
    }
}