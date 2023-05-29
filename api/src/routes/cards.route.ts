import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';

export class CardsRoute implements Routes {
  public path = '/cards';
  public router = Router();
  // public user = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, );
    
  }
}