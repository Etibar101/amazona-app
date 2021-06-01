import express, {response} from 'express';
import data from "./data.js";

const app = express();

app.get('/', (require, response) => {
    response.send('Server is ready');
})
app.get('/api/products', (require, response) => {
    response.send(data.products);
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
