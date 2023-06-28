import request from 'supertest'; 
import { App } from '@/app'; 
import { CardsRoute } from '@routes/cards.route'; 
import { PokemonCard } from '@/interfaces/cards.interface';
import { ClientSession } from 'mongodb';
import { Document, Model, DocumentSetOptions, QueryOptions, Callback, UpdateQuery, AnyObject, PopulateOptions, MergeType, Query, SaveOptions, LeanDocument, ToObjectOptions, FlattenMaps, Require_id, UpdateWithAggregationPipeline, PathsToValidate, CallbackWithoutResult, pathsToSkip, Error, Connection } from 'mongoose';
import { PriceHistory } from '@/interfaces/priceHistory.interface';
import { CreateCardDto } from '@/dtos/cards.dto';
import { CreatePriceHistoryDto } from '@/dtos/priceHistory.dto';
import { PriceHistoryModel } from '@/models/priceHistory.model';
import { PokemonCardModel } from '@/models/cards.model';
import encodings from '../../node_modules/iconv-lite/encodings';
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