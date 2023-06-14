import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { CardsController } from '@/controllers/cards.controller';
import { ValidationMiddleware } from '@/middlewares/validation.middleware';
import { CreateCardDto } from '@/dtos/cards.dto';

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

    // Route for post request for creating a new card
    this.router.post(`${this.path}`, ValidationMiddleware(CreateCardDto), this.card.createCard);

    this.router.get(`${this.path}/:id`, this.card.getCardById);
  }
}