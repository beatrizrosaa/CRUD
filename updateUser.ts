import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default {
    async updateUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id, 10); 
            const { name, email, idade, senha, cidade, estado } = req.body; 

            const user = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            const updatedUser = await prisma.user.update({
                where: { id: userId },
                data: {
                    name,
                    email,
                    senha,
                    idade,
                    cidade,
                    estado
                }
            });

            console.log('Usuário atualizado com sucesso:', updatedUser);
            res.json({ message: 'Usuário atualizado com sucesso', updatedUser });
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido ao atualizar usuário' });
            }
        }
    }
}
