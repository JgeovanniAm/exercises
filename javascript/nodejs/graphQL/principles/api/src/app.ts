import express from 'express';
import cors from 'cors';
//import compression from 'compression';
import apolloSERVER from './init';


const app = express();

// settings 
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
apolloSERVER.applyMiddleware({ app })
app.use(express.json());

export default app