import request from 'supertest'; 
import { App } from '@/app'; 
import { CardsRoute } from '@routes/cards.route'; 
import { PokemonCard } from '@/interfaces/cards.interface';
import { ClientSession } from 'mongodb';
import { Document, Model, DocumentSetOptions, QueryOptions, Callback, UpdateQuery, AnyObject, PopulateOptions, MergeType, Query, SaveOptions, LeanDocument, ToObjectOptions, FlattenMaps, Require_id, UpdateWithAggregationPipeline, PathsToValidate, CallbackWithoutResult, pathsToSkip, Error, Connection } from 'mongoose';
import { PriceHistoryData } from '@/interfaces/priceHistory.interface';
import { CreateCardDto } from '@/dtos/cards.dto';
import { CreatePriceHistoryDto } from '@/dtos/priceHistory.dto';
import { PriceHistoryModel } from '@/models/priceHistory.model';

/* Test Card
  {
    "_id": {
      "$oid": "6482376994a5ef427d02e71e"
    },
    "name": "Card 1",
    "description": "Description 1",
    "SalePrice": 1,
    "MarketPrice": 1,
    "rating": [],
    "image": "linktoImage",
    "priceHistory": []
  }
*/

afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500)); 
}); 

describe('Testing Cards', () => {
  // GET all cards. 
  describe('[GET] /card', () => {
    it('response statusCode 200', async () => {
      const cardsRoute = new CardsRoute();
      const app = new App([cardsRoute]);

      const result = await request(app.getServer()).get(`${cardsRoute.path}`);
      expect(result.status).toEqual(200);
      // Check to see that the there is at least one value.
      expect(result.body.data.length).toBeGreaterThanOrEqual(1);
      // Check if the first items id is a length of 24.
      // Mongo Object ID data types are a 24 character hexadecimal code.
      expect(result.body.data[0]._id).toHaveLength(24);
    });
  });

  
  // GET card by ID
  describe('[GET] /card/:id', () => {
    it('response with card and ID matches', async () => {
      const cardsRoute = new CardsRoute();
      const app = new App([cardsRoute]);

      // GET the cardId from the test card.
      const cardId = "6482376994a5ef427d02e71e";

      const result = await request(app.getServer()).get(`${cardsRoute.path}/${cardId}`);
      // Expect good status code and cardId to match the route
      expect(result.status).toEqual(200);
      expect(result.body.data._id).toEqual(cardId);
    });
  });
});

});

describe('Testing Cards Routes', () => {
    describe('[POST] /', () => {
        it('response statusCode 200, and creates new card', async () => {
            const cardsRoute = new CardsRoute(); 
            const app = new App([cardsRoute]); 

            const result = await request(app.getServer()).get(`${cardsRoute.path}`); 
            console.log(result); 
            debugger; 
        });
    });

    describe('[POST] /', () => {
        it('Create Pikachu Card', async () => {
            const cardsRoute = new CardsRoute(); 
            const app = new App([cardsRoute]); 

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

            debugger; 

        });

        it('Create Charmander Card', async () => {
            const cardsRoute = new CardsRoute(); 
            const app = new App([cardsRoute]); 

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

            debugger; 
        });
    });
});


