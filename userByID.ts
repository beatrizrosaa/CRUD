import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default {
    async getUserById(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id, 10);
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar usuário por ID' });
        }
    }
}
