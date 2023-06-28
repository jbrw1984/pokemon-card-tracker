import request from 'supertest'; 
import { App } from '@/app'; 
import { CardsRoute } from '@routes/cards.route'; 
import { PokemonCard } from '@/interfaces/cards.interface';
import { PokemonCardModel } from '@/models/cards.model';
import { CreateCardDto } from '@/dtos/cards.dto';
import { CreatePriceHistoryDto } from '@/dtos/priceHistory.dto';
import { PriceHistoryModel } from '@/models/priceHistory.model';
import { cardData } from './arrayOfCards';

// Global variables 
const cardsRoute = new CardsRoute();
const app = new App([cardsRoute]);
// Create an array of newly created cards
let createdCards: PokemonCard[] = [];

// Before running tests add 22 cards to DB
beforeAll(async () => {
  // Loop through card data adding each card to the db
  for (let i: number = 0; i < cardData.length; i++) {
    // Manually create a card (this just adds a card to mongo without using an endpoint)
    createdCards[i] = await PokemonCardModel.create(cardData[i]);
  }
});

afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500)); 
}); 

// Tests begin here
describe('Testing Cards', () => {
  // Test [POST] creating cards
  describe('[POST] /', () => {
    // First create card  
    it('Create Pikachu Card', async () => {
      const priceHistoryData1: CreatePriceHistoryDto[] = [{
        date: new Date(2023, 6, 13), 
        quantity: 1, 
        price: 1
      }]

      const priceHistoryPromises1 = priceHistoryData1.map(async (history) => {
        const priceHistory = new PriceHistoryModel(history);
          await priceHistory.save();
          return priceHistory;
      });
            
      const priceHistories1 = await Promise.all(priceHistoryPromises1);

      const cardData1: CreateCardDto = {
        name: 'Pikachu',
        description: 'Electric Type',
        salePrice: 1,
        marketPrice: 1,
        rating: [],
        image: 'Pikachu.png',
        priceHistory: priceHistories1,
      }

      const priceHistory1Id = '648a4d3b3ca4e931fb7af4ab'; 

      /**
       * Request method creates new HTTP request that's used to send requests
       * Post method creates post request to specified path
       * Send method sends the cardPostData to the post request
       */
      const response = await request(app.getServer())
        .post(`${cardsRoute.path}`)
        .send(cardData1); 
          
      expect(response.body.data.name).toBe(cardData1.name);
      expect(response.body.data.description).toBe(cardData1.description);
      expect(response.body.data.salePrice).toBe(cardData1.salePrice);
      expect(response.body.data.marketPrice).toBe(cardData1.marketPrice);
      expect(response.body.data.rating).toStrictEqual(cardData1.rating);
      expect(response.body.data.image).toBe(cardData1.image);

      // TODO: Test priceHistory field of response
      // expect(response.body.data.priceHistory[0]).toBe(cardData1.priceHistory._id);
    });

    // Second create card
    it('Create Charmander Card', async () => {
      const priceHistoryData2: CreatePriceHistoryDto[] = [{
        date: new Date(2023, 6, 13), 
        quantity: 1, 
        price: 1
      }]

      const priceHistoryPromises2 = priceHistoryData2.map(async (history) => {
        const priceHistory = new PriceHistoryModel(history);
        await priceHistory.save();
        return priceHistory;
      });
        
      const priceHistories2 = await Promise.all(priceHistoryPromises2);

      const cardData2: CreateCardDto = {
        name: 'Charmander',
        description: 'Fire Type',
        salePrice: 23.10,
        marketPrice: 46.20,
        rating: [1, 9, 8, 2, 10],
        image: 'Charmander.png',
        priceHistory: priceHistories2,
      }

      /**
       * Request method creates new HTTP request that's used to send requests
       * Post method creates post request to specified path
       * Send method sends the cardPostData to the post request
       */
      const response = await request(app.getServer())
        .post(`${cardsRoute.path}`)
        .send(cardData2); 
            
      expect(response.body.data.name).toBe(cardData2.name);
      expect(response.body.data.description).toBe(cardData2.description);
      expect(response.body.data.salePrice).toBe(cardData2.salePrice);
      expect(response.body.data.marketPrice).toBe(cardData2.marketPrice);
      expect(response.body.data.rating).toStrictEqual(cardData2.rating);
      expect(response.body.data.image).toBe(cardData2.image);
    });
  });

  // GET all cards. 
  describe('[GET] /card', () => {
    // Test no query passed
    it('Default page', async () => {
      const result = await request(app.getServer()).get(`${cardsRoute.path}`);
      expect(result.status).toEqual(200);
      // Check to see that the there is 12 cards 
      expect(result.body.data.length).toBe(12);
      // First card on default page (page 1) should be Card 1
      expect(result.body.data[0].name).toBe("Card 1");
      // Check if the first items id is a length of 24.
      // Mongo Object ID data types are a 24 character hexadecimal code.
      expect(result.body.data[0]._id).toHaveLength(24);
    });
    // Test page=2 passed as query
    it('Page 2', async () => {
      const result = await request(app.getServer()).get(`${cardsRoute.path}?page=2`);
      expect(result.status).toEqual(200);
      // Check to see that the there is at least 1 card on the second page
      expect(result.body.data.length).toBeGreaterThanOrEqual(1);
      // First card on page 2 should be card 13
      expect(result.body.data[0].name).toBe("Card 13");
      // Check if the first items id is a length of 24.
      // Mongo Object ID data types are a 24 character hexadecimal code.
      expect(result.body.data[0]._id).toHaveLength(24);
    });
  });

  // GET card by ID
  describe('[GET] /card/:id', () => {
    it('response with card and ID matches', async () => {
      // Store the first created card's id
      const cardId = createdCards[0]._id;
      
      // Pass the new ID to the [GET] by ID endpoint
      const result = await request(app.getServer()).get(`${cardsRoute.path}/${cardId}`);
      // Expect good status code and cardId to match the route
      expect(result.status).toEqual(200);
      // Note had to use toString because of objectId type.
      expect(result.body.data._id.toString()).toEqual(cardId.toString());
    });
  });
});