import { request } from 'express';
import db from '../database/connection';

class ConnectionController {
  async store(req:Request, res:Response) {
    try {
      const { user_id } = req.body;

      await db('connections').insert({ user_id });
      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  async index(req:Request, res:Response) {
    const totalConnections = await db('connections').count('* as total');
    const { total } = totalConnections[0];
    return res.json({ total });
  }
}

export default new ConnectionController();
