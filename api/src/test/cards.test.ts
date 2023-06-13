import request from 'supertest';
import { App }from '@/app';
import { CardsRoute } from '@routes/cards.route';

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