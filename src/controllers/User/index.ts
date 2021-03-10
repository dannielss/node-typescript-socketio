import { Request, Response } from 'express';

class User {
  index(req: Request, res: Response) {
    return res.json({ message: 'hello' });
  }
}

export default new User();
