import { Request, Response } from 'express';

export const logoutUser = (req: Request, res: Response) => {
  res.json({ message: 'Logout realizado com sucesso' });
};
