import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { IndexRoute } from '@routes/index.route';
import { CardsRoute } from './routes/cards.route';
const cors = require('cors');

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new IndexRoute(), new CardsRoute()]);
/*
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
*/
app.listen();
