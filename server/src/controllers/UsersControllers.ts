import { Request, Response } from 'express';
import db from '../database/connection';

export default class UsersController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const ra = filters.ra as string;

    if (!filters.ra) {
      return response.status(400).json({
        error: 'Missing filter to search user'
      })
    }

    const users = await db('users').where("users.ra", "=", ra)

    return response.json(users);
    
  }

  async update(request: Request, response: Response) {
    const {name, email} = request.body;
    const {ra} = request.params;
    
    try {
      
      const trx = await db

      await trx('users').update({name, email}).where({ra})

      return response.status(201).send();
    }
    catch (error) {
      return response.status(400).json({
        error: 'Unexpected error while creating new user'
      })
    }
  }

  async delete(request: Request, response: Response) {
    const {ra} = request.params;
    
    try {
      const trx = await db

      await trx('users').where({ra}).delete()

      return response.status(201).send();
    } 
    catch (error) {
      return response.status(400).json({
        error: 'ID not fond'
      })
    }
  }

  async create(request: Request, response: Response) {
    const {name, email, ra, cpf} = request.body;
  
    const trx = await db.transaction();
  
    try {
      await trx('users').insert({
        name,
        email,
        ra,
        cpf,
      });
    
      await trx.commit();
    
      return response.status(201).send();
    }
    catch (err) {
      await trx.rollback();
  
      return response.status(400).json({
        error: 'Unexpected error while creating new user'
      })
    }
  }
}