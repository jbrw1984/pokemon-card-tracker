import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { User } from '@interfaces/users.interface';
import { UserService } from '@services/users.service';
import { PokemonCard } from '@interfaces/cards.interface';
import { CardService } from '@/services/cards.service';
import { PokemonCardModel } from '@/models/cards.model';
import { PriceHistory } from '@/interfaces/priceHistory.interface';
import { ObjectId } from 'mongoose';
import { CreatePriceHistoryDto } from '@/dtos/priceHistory.dto';

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
      // Initialize our page to 1 and our limit to 12 (12 cards per page)
      let page: number = Number(req.query.page) || 1;
      const limit: number = 12;
      let totalNumberOfPages: number;
      
      // Optional url queries
      const cardName: string = req.query.name as string | "";
      const sortBy: string = req.query.sort as string | "";
      const order: string = req.query.order as string | "";
      const minPrice: number = Number(req.query.min) || 0;
      const maxPrice: number = Number(req.query.max) || Number.MAX_SAFE_INTEGER;
      /*
      const filter: {} = cardName || minPrice || maxPrice ? { $or: 
        [
          { name: { $regex: `${cardName}`, $options: 'i' } },
          { description: { $regex: `${cardName}`, $options: 'i' } }
        ]
      } : {};
      */

      // If the cardname is provided match the cardname else just match price range
      const filter: {} = cardName ? {
        $and: [
          { $or: [
            { name: { $regex: `${cardName}`, $options: 'i' } },
            { description: { $regex: `${cardName}`, $options: 'i' } }
          ]},
          { salePrice: { $gte: `${minPrice}`, $lte: `${maxPrice}` } }
        ]
      } : { salePrice: { $gte: `${minPrice}`, $lte: `${maxPrice}` } };
      totalNumberOfPages = Math.ceil((await PokemonCardModel.find(filter)).length / limit);
      
      if (page > totalNumberOfPages) {
        page = totalNumberOfPages;
      }
    
      const findAllCardsData: PokemonCard[] = await this.card.findAllCards(page, limit, cardName, sortBy, order, minPrice, maxPrice);

      res.status(200).json({ data: findAllCardsData, message: 'findAll', totalPages: totalNumberOfPages });
    } catch (error) {
      next(error);
    }
  };

  public getCardById = async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const cardId: string = req.params.id;
      const includePriceHistory : boolean = req.query.include === 'price-history';
      const findOneCardData: PokemonCard = await this.card.findCardById(cardId, includePriceHistory);

      res.status(200).json({ data: findOneCardData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // cardData is the pokemon card information that is sent by the user 
      // in the post request
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
      res.status(500).json({ error: 'Internal Server Error' });

    }
  }

  public createPriceHistory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // priceHistoryData: price history info sent by user in post request
      const priceHistoryData : PriceHistory = req.body; 
      // const priceHistoryData : CreatePriceHistoryDto = req.body;
      const cardId : ObjectId | string = req.params.id; 
      
      // Inject the cardId from the URL path into priceHistoryData
      priceHistoryData.pokemonCardId = cardId; 

      // Pass in priceHistoryData into the cards service method createPriceHistory()
      // This will create a new card in the database and return it
      const createdPriceHistory : PriceHistory = await this.card.createPriceHistory(cardId, priceHistoryData); 

      // Send response back to user with HTTP status code 201 and 
      // created price history obj in JSON form
      res.status(201).json({ data: createdPriceHistory, message: 'created' }); 
    }
    catch(error) {

      // TODO: look into what to do if post request fails 
      next(error); 
      res.status(500).json({ error: 'Internal Server Error' });

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
