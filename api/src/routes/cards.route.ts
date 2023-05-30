import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { CardsController } from '@/controllers/cards.controller';

export class CardsRoute implements Routes {
  public path = '/cards';
  public router = Router();
  // public user = new UserController();
  public card = new CardsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.card.getCards);
    this.router.get(`${this.path}/:id`, this.card.getCardById);
  }
}