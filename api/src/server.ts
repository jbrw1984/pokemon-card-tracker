import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { IndexRoute } from '@routes/index.route';
import { CardsRoute } from './routes/cards.route';

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new IndexRoute(), new CardsRoute]);

app.listen();
