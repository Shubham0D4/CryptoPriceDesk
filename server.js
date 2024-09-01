const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static('public'));


app.get('/api/crypto', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 5,
                page: 1,
                sparkline: false,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from CoinGecko API:', error);
        res.status(500).send('Error fetching data from CoinGecko API');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
