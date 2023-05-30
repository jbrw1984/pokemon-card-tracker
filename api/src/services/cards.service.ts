import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
// import { User } from '@interfaces/users.interface';
// import { UserModel } from '@models/users.model';
import { PokemonCard } from '@/interfaces/cards.interface';
import { PokemonCardModel } from '@/models/cards.model';

@Service()
export class CardService {
  public async findAllCards(): Promise<PokemonCard[]> {
    // Still need PokemonCardModel
    const cards: PokemonCard[] = await PokemonCardModel.find();
    return cards;
  }

  public async findCardById(cardId: number): Promise<PokemonCard> {
    const findCard: PokemonCard = await PokemonCardModel.findOne({ _id: cardId });
    if (!findCard) throw new HttpException(409, "Card doesn't exist");

    return findCard;
  }

  
  
}