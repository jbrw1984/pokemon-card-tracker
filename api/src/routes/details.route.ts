import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';

export class DetailsRoute implements Routes {
  public path = '/details';
  public router = Router();
  // public user = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, (req, res) => {
      // Get the pokemon card based the id of the one selected on the home page
    });
  }
}