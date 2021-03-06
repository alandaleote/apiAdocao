const dotenv = require('dotenv');
const app = require('./app');

const port = process.env.PORT || 3000;

dotenv.config();

app.listen(port, () => {
    console.log('Running Server');
});