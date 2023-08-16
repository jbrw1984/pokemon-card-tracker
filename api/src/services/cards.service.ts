import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { PokemonCard } from '@/interfaces/cards.interface';
import { PokemonCardModel } from '@/models/cards.model';
import { PriceHistory } from '@/interfaces/priceHistory.interface';
import { PriceHistoryModel } from '@/models/priceHistory.model';
import { ObjectId } from 'mongoose';

@Service()
export class CardService {
  public async findAllCards(page: number, limit: number, cardName: string | undefined, sortBy: string | undefined, order: string | undefined, minPrice: number, maxPrice: number): Promise<PokemonCard[]> {
    // Regex is the 'like' match, and i makes the match case insensative. 
    const filter: {} = cardName ? {
      $and: [
        { $or: [
          { name: { $regex: `${cardName}`, $options: 'i' } },
          { description: { $regex: `${cardName}`, $options: 'i' } }
        ]},
        { salePrice: { $gte: `${minPrice}`, $lte: `${maxPrice}` } }
      ]
    } : { salePrice: { $gte: `${minPrice}`, $lte: `${maxPrice}` } };

    const sortFilter: {} = sortBy ? { [sortBy]: order } : {};
    
    const cards: PokemonCard[] = await PokemonCardModel.find(filter)
      .sort(sortFilter)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    return cards;
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