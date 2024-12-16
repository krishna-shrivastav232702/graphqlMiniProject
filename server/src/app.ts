import { expressMiddleware } from "@apollo/server/express4"
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { connectGraphql } from './graphql/graphql.js'
import { errorMiddleware } from './middlewares/error.js'

dotenv.config({ path: './.env', });

export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = Number(process.env.PORT) || 3000;

const graphql = connectGraphql();
await graphql.start();


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ' * ', credentials: true }));
app.use(morgan('dev'))

app.use('/graphql',expressMiddleware(graphql));


app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Page not found'
  });
});

app.use(errorMiddleware);


app.listen(port, () => console.log('Server is working on Port:' + port + ' in ' + envMode + ' Mode.'));