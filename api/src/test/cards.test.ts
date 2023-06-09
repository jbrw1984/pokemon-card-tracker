import request from 'supertest';
import { App }from '@/app';
import { CardsRoute } from '@routes/cards.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Cards', () => {
  // GET all cards. 
  describe('[GET] /', () => {
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
  /*
  describe('[GET] /users', () => {
    it('response fineAll Users', async () => {
      const usersRoute = new UserRoute();
      const users = usersRoute.usersController.userService.users;

      users.find = jest.fn().mockReturnValue([
        {
          _id: 'qpwoeiruty',
          email: 'a@email.com',
          password: await bcrypt.hash('q1w2e3r4!', 10),
        },
        {
          _id: 'alskdjfhg',
          email: 'b@email.com',
          password: await bcrypt.hash('a1s2d3f4!', 10),
        },
        {
          _id: 'zmxncbv',
          email: 'c@email.com',
          password: await bcrypt.hash('z1x2c3v4!', 10),
        },
      ]);

      (mongoose as any).connect = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).get(`${usersRoute.path}`).expect(200);
    });
  });
  */
});