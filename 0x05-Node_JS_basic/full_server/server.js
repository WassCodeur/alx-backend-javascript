import express from 'express';
import routing from './routes/index';

const app = express();

routing(app);

app.listen(1245, () => { });

export default app;
