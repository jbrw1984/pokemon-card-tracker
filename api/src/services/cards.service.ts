import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
// import { User } from '@interfaces/users.interface';
// import { UserModel } from '@models/users.model';
import { PokemonCard } from '@/interfaces/cards.interface';
import { PokemonCardModel } from '@/models/cards.model';

@Service()
export class CardService {
  public async findAllCards(page: any, limit: any): Promise<PokemonCard[]> {
    // Still need PokemonCardModel
    const cards: PokemonCard[] = await PokemonCardModel.find()
    // Ensure the limit is a number by multipling by 1
    .limit(limit * 1)
    // Skip the correct number of pages based on current page
    // ie page 1 skip 0 cards
    .skip((page - 1) * limit);
    return cards;
  }

  public async findCardById(cardId: string): Promise<PokemonCard> {
    const findCard: PokemonCard = await PokemonCardModel.findOne({ _id: cardId });
    if (!findCard) throw new HttpException(409, "Card doesn't exist");

    return findCard;
  }

  public async createCard(cardData: PokemonCard): Promise<PokemonCard> {
    const createdCard: PokemonCard = await PokemonCardModel.create(cardData);
    
    //TODO: add some kind of catch for catching errors
    // if (!createdCard) throw new HttpException(409, "Card doesn't exist");

    return createdCard;
  }
  
}