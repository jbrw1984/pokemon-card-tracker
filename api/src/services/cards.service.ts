import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
// import { User } from '@interfaces/users.interface';
// import { UserModel } from '@models/users.model';
import { PokemonCard } from '@/interfaces/cards.interface';
import { PokemonCardModel } from '@/models/cards.model';
import { PriceHistory } from '@/interfaces/priceHistory.interface';
import { PriceHistoryModel } from '@/models/priceHistory.model';
import { ObjectId } from 'mongoose';

@Service()
export class CardService {
  public async findAllCards(page: number, limit: number, searchByName: boolean, cardName: string | undefined): Promise<PokemonCard[]> {

    if(searchByName) {
      const cards: PokemonCard[] = await PokemonCardModel.find({name: `${cardName}`})
      // Ensure the limit is a number by multipling by 1
      .limit(limit * 1)
      // Skip the correct number of pages based on current page
      // ie page 1 skip 0 cards
      .skip((page - 1) * limit);
      return cards;
    }
    else {
      const cards: PokemonCard[] = await PokemonCardModel.find()
      // Ensure the limit is a number by multipling by 1
      .limit(limit * 1)
      // Skip the correct number of pages based on current page
      // ie page 1 skip 0 cards
      .skip((page - 1) * limit);
      return cards;
    }
  }

  public async findCardById(cardId: string, includePriceHistory: boolean): Promise<PokemonCard> {

    // Include price history
    if(includePriceHistory) {
      // Find card by id and populate price history, then sort price history by date, descending
      const findCard: PokemonCard = await PokemonCardModel.findOne({ _id: cardId })
        .populate({
          path: 'priceHistoryEntries',
          options: { sort: {date: 'desc'}}
        }); 

      if (!findCard) throw new HttpException(409, "Card doesn't exist");
      return findCard;
    }
    // Don't include price history
    else {
      const findCard: PokemonCard = await PokemonCardModel.findOne({ _id: cardId });
      if (!findCard) throw new HttpException(409, "Card doesn't exist");
      return findCard;
    }
  }

  public async createCard(cardData: PokemonCard): Promise<PokemonCard> {
    const createdCard: PokemonCard = await PokemonCardModel.create(cardData);
    
    //TODO: add some kind of catch for catching errors
    // if (!createdCard) throw new HttpException(409, "Card doesn't exist");

    return createdCard;
  }
  
  public async createPriceHistory(cardId : ObjectId | string , priceHistoryData: PriceHistory): Promise<PriceHistory> {
    const createdPriceHistory: PriceHistory = await PriceHistoryModel.create(priceHistoryData);
    
    //TODO: add some kind of catch for catching errors
    // if (!createdPriceHistory) throw new HttpException(409, "Price History doesn't exist");

    return createdPriceHistory;
  }
  
}