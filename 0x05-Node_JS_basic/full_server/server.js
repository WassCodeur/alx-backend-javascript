import express from 'express';
import routes from './routes/index';

const app = express();

routes(app);

app.listen(1245);

export default app;
