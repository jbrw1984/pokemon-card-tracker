import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { User } from '@interfaces/users.interface';
import { UserService } from '@services/users.service';
import { PokemonCard } from '@interfaces/cards.interface';
import { CardService } from '@/services/cards.service';

// All routes that will need controllers
// Get cards (all cards main page)
  // Get cards by filter (filtered cards main page)
  // Get cards by search (not exactly sure how this works, Maybe by name?)
// Create new card 
// Get card by id (details page)
// Create card rating by id (Card rating slider submit)
// Create new price entry by id (New price history submit)

export class CardsController {
  public card = Container.get(CardService);

  // Controller to get all cards this will be used for the main page.
  public getCards = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCardsData: PokemonCard[] = await this.card.findAllCards();

      res.status(200).json({ data: findAllCardsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCardById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // The url is naturally a string so convert to Int. 
      const cardId: number = parseInt(req.params.id);
      const findOneCardData: PokemonCard = await this.card.findCardById(cardId);

      res.status(200).json({ data: findOneCardData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
  /*
  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const createUserData: User = await this.user.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const userData: User = req.body;
      const updateUserData: User = await this.user.updateUser(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const deleteUserData: User = await this.user.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
  */
}
