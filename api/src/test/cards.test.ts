import request from 'supertest';
import { App }from '@/app';
import { CardsRoute } from '@routes/cards.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Cards', () => {
  // GET all cards. 
  describe('[GET] /', () => {
    it('response statusCode 200', () => {
      const cardsRoute = new CardsRoute();
      const app = new App([cardsRoute]);

      return request(app.getServer()).get(`${cardsRoute.path}`).expect(200);
      debugger;
    });
  });
});