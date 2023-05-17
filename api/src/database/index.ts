import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  // Removed the two options here useNewUrlParser and useUnifiedTopology
  // Mongoose 6 assumes these are true
  options: {
  },
};
