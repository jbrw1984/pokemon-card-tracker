import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { User } from '@interfaces/users.interface';
import { UserService } from '@services/users.service';
import { PokemonCard } from '@interfaces/cards.interface';
import { CardService } from '@/services/cards.service';

// All routes that will need controllers
// Create new card: POST /cards
// Get cards (all cards main page): GET /cards
//   - Get cards by filter (filtered cards main page), uses query parans: GET /cards?params=
//   - Get cards by search (not exactly sure how this works, Maybe by name), uses query params: GET /cards?params=
// Get card by id (details page): GET /cards/:cardId
// Create card rating by id (Card rating slider submit), custom action endpoint: POST /cards/:cardId/rating
// Create new price entry by id (New price history submit)
//   - This is a child object in Mongo, that is related to the card, but is a different Mongo model
//   - POST /cards/:cardId/priceHistory
// Get price history: GET /cards/:cardId/priceHistory -OR-
// Include price history in cards endpoints: ?include=priceHistory

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

  public createCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // cardData is the pokemon card information that is sent by the user 
      // in the post request
      // TODO: add TS typing to this variable
      const cardData : PokemonCard = req.body; 

      // Pass in cardData into the cards service method called createCard()
      // This will create a new card in the database and return it
      const createdCard : PokemonCard = await this.card.createCard(cardData); 

      // Send response back to user with HTTP status code 201 and 
      // created card obj in JSON form
      res.status(201).json({ data: createdCard, message: 'created' }); 
    }
    catch(error) {

      // TODO: look into what to do if post request fails 
      next(error); 
      // res.status(500).json({ error: 'Internal Server Error' });

    }
  }

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
