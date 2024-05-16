import express, { Application, Response, Request } from 'express';
import cors from 'cors';
const app: Application = express();

// express parse
app.use(express.json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
  const a = 33;
  res.send(a);
});

export default app;
