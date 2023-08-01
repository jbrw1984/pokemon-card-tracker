import request from 'supertest'; 
import { PriceHistory } from '@/interfaces/priceHistory.interface';
import { CreateCardDto } from '@/dtos/cards.dto';
import { CreatePriceHistoryDto } from '@/dtos/priceHistory.dto';
import { PriceHistoryModel } from '@/models/priceHistory.model';
import { PokemonCardModel } from '@/models/cards.model';
import { App } from '@/app'; 
import { CardsRoute } from '@routes/cards.route'; 
import { PokemonCard } from '@/interfaces/cards.interface';
import { ClientSession } from 'mongodb';
import { Document, Model, DocumentSetOptions, QueryOptions, Callback, UpdateQuery, AnyObject, PopulateOptions, MergeType, Query, SaveOptions, LeanDocument, ToObjectOptions, FlattenMaps, Require_id, UpdateWithAggregationPipeline, PathsToValidate, CallbackWithoutResult, pathsToSkip, Error, Connection } from 'mongoose';
import { cardData } from './arrayOfCards';

// Global variables 
const cardsRoute = new CardsRoute();
const app = new App([cardsRoute]);
// Create an array of newly created cards
let createdCards: PokemonCard[] = [];

// Before running tests add 22 cards to DB
beforeAll(async () => {
  // Check how many entries in collections
  const cardCount = await PokemonCardModel.countDocuments({});
  const priceHistoryCount = await PriceHistoryModel.countDocuments({});
  // Drop collections to have a clean database each test run.
  // Note there is a bug if the collection is empty
  if (cardCount !== 0) {
    await PokemonCardModel.collection.drop();
  }
  if (priceHistoryCount !== 0) {
    await PriceHistoryModel.collection.drop();
  }
  
  // Now repopulate collection with cards.
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

      const cardData1: CreateCardDto = {
        name: 'Pikachu',
        description: 'Electric Type',
        salePrice: 1,
        marketPrice: 1,
        rating: [],
        image: 'Pikachu.png',
      }

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

    });

    // Second create card
    it('Create Charmander Card', async () => {

      const cardData2: CreateCardDto = {
        name: 'Charmander',
        description: 'Fire Type',
        salePrice: 23.10,
        marketPrice: 46.20,
        rating: [1, 9, 8, 2, 10],
        image: 'Charmander.png',
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


    // Test [POST] creating price history
    describe('[POST] /cards/:id/price-history', () => {
      it('Create Price History Entry', async () => {
        const cardsRoute = new CardsRoute(); 
        const app = new App([cardsRoute]); 
  
        // Create a sample card for the price history to reference
        const cardData1: PokemonCard = {
          name: 'Pikachu',
          description: 'Electric Type',
          salePrice: 1,
          marketPrice: 1,
          rating: [],
          image: 'Pikachu.png',
        }
        const createdCard1: PokemonCard = await PokemonCardModel.create(cardData1);
        const createdCard1Id = createdCard1._id; 

        const priceHistoryData1: CreatePriceHistoryDto = {
          date: new Date(2023, 6, 13), 
          quantity: 234, 
          price: 568
        }
  
        /**
         * Request method creates new HTTP request that's used to send requests
         * Post method creates post request to specified path
         */
        const response = await request(app.getServer())
          .post(`${cardsRoute.path}/${createdCard1Id}/price-history`)
          .send(priceHistoryData1); 
            
        // Need to create a date object from the string date given in the response object
        const dateAndTimePriceHistory : string[] = response.body.data.date.split("T"); 
        const dateOfPriceHistory : string = dateAndTimePriceHistory[0]; 
        const [year, month, day] : string[] = dateOfPriceHistory.split('-');
        const responseDateObject = new Date(+year, +month - 1, +day);        

        expect(response.body.data.pokemonCardId).toBe(createdCard1Id.toString());
        expect(responseDateObject.toString()).toBe(priceHistoryData1.date.toString());
        expect(response.body.data.quantity).toBe(priceHistoryData1.quantity);
        expect(response.body.data.price).toBe(priceHistoryData1.price);
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
    // Test limit query
    it('Get cards and limit', async () => {
      const result = await request(app.getServer()).get(`${cardsRoute.path}?page=1&limit=12`);

      expect(result.status).toEqual(200);
      expect(result.body.data.length).toEqual(12);
    });

    // GET card by name
    it('Query name of card', async () => {
      const cardName1 : string = createdCards[0].name;
      const result = await request(app.getServer()).get(`${cardsRoute.path}?name=${cardName1}`);
    
      expect(result.status).toEqual(200);
      expect(result.body.data.length).toBeGreaterThanOrEqual(1);
      expect(result.body.data[0].name).toBe("Card 1");
      expect(result.body.data[0]._id).toHaveLength(24);
    });

    // GET card by name and page
    it('Query name of card and page number', async () => {

      const testCard1 : PokemonCard = {
        name: 'SearchCardQuery', 
        description: 'Search', 
        salePrice: 1, 
        marketPrice: 2, 
        rating: [], 
        image: 'img',
      }
      let createdSameNameCards: PokemonCard[] = [];
      // Create multiple cards with same name
      for (let i: number = 0; i < 15; i++) {
        createdSameNameCards[i] = await PokemonCardModel.create(testCard1);
      }

      const result = await request(app.getServer()).get(`${cardsRoute.path}?name=${testCard1.name}&page=2`);
    
      expect(result.status).toEqual(200);
      // Expect 3 cards on second page (15 cards total - 12 card limit)
      expect(result.body.data.length).toEqual(3);
      expect(result.body.data[0].name).toBe("SearchCardQuery");
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

    it('Get price history with include param', async () => {
      // Create multiple price history entries
      const cardId = createdCards[0]._id;
      const priceHistoryData0: PriceHistory = {
        pokemonCardId: cardId, 
        date: new Date(2023, 6, 13), 
        quantity: 234, 
        price: 568
      }
      const priceHistoryData1: PriceHistory = {
        pokemonCardId: cardId, 
        date: new Date(1999, 12, 31), 
        quantity: 2, 
        price: 200
      }
      const priceHistoryData2: PriceHistory = {
        pokemonCardId: cardId, 
        date: new Date(2004, 1, 16), 
        quantity: 90, 
        price: 16
      }
      const priceHistoryData3: PriceHistory = {
        pokemonCardId: cardId, 
        date: new Date(2016, 5, 8), 
        quantity: 1200, 
        price: 0.92
      }
      const createdPriceHistory0: PriceHistory = await PriceHistoryModel.create(priceHistoryData0);
      const createdPriceHistory1: PriceHistory = await PriceHistoryModel.create(priceHistoryData1);
      const createdPriceHistory2: PriceHistory = await PriceHistoryModel.create(priceHistoryData2);
      const createdPriceHistory3: PriceHistory = await PriceHistoryModel.create(priceHistoryData3);



      // Pass the new ID to the [GET] by ID endpoint
      const result = await request(app.getServer()).get(`${cardsRoute.path}/${cardId}?include=price-history`);


      // Expect good status code and cardId to match the route
      expect(result.status).toEqual(200);
      // Note had to use toString because of objectId type.
      expect(result.body.data._id.toString()).toEqual(cardId.toString());

      // Check pokemon card fields 
      expect(result.body.data.name).toEqual(createdCards[0].name);
      expect(result.body.data.description).toEqual(createdCards[0].description);
      expect(result.body.data.salePrice).toEqual(createdCards[0].salePrice);
      expect(result.body.data.marketPrice).toEqual(createdCards[0].marketPrice);
      expect(result.body.data.rating).toEqual(createdCards[0].rating);
      expect(result.body.data.image).toEqual(createdCards[0].image);

      // Check first price history entry
      const dateAndTimePriceHistory0 : string[] = result.body.data.priceHistoryEntries[0].date.split("T"); 
      const dateOfPriceHistory0 : string = dateAndTimePriceHistory0[0]; 
      const [year0, month0, day0] : string[] = dateOfPriceHistory0.split('-');
      const responseDateObject0 = new Date(+year0, +month0 - 1, +day0);

      expect(responseDateObject0.toString()).toBe(priceHistoryData0.date.toString());
      // expect(result.body.data.priceHistoryEntries[0]._id.toString()).toEqual(createdPriceHistory1._id.toString());
      expect(result.body.data.priceHistoryEntries[0].pokemonCardId.toString()).toEqual(priceHistoryData0.pokemonCardId.toString());
      expect(result.body.data.priceHistoryEntries[0].price).toEqual(priceHistoryData0.price);
      expect(result.body.data.priceHistoryEntries[0].quantity).toEqual(priceHistoryData0.quantity);


      // Check second price history entry
      const dateAndTimePriceHistory3 : string[] = result.body.data.priceHistoryEntries[1].date.split("T"); 
      const dateOfPriceHistory3 : string = dateAndTimePriceHistory3[0]; 
      const [year3, month3, day3] : string[] = dateOfPriceHistory3.split('-');
      const responseDateObject3 = new Date(+year3, +month3 - 1, +day3);

      expect(responseDateObject3.toString()).toBe(priceHistoryData3.date.toString());
      // expect(result.body.data.priceHistoryEntries[0]._id.toString()).toEqual(createdPriceHistory1._id.toString());
      expect(result.body.data.priceHistoryEntries[1].pokemonCardId.toString()).toEqual(priceHistoryData3.pokemonCardId.toString());
      expect(result.body.data.priceHistoryEntries[1].price).toEqual(priceHistoryData3.price);
      expect(result.body.data.priceHistoryEntries[1].quantity).toEqual(priceHistoryData3.quantity);
    });

  });
});