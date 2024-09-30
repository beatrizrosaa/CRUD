import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default {
    async deleteUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id, 10); 
            const user = await prisma.user.delete({
                where: { id: userId },
            });
            
            res.json({ message: 'Usuário excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir usuário' });
        }
    }
}
