import axios from "axios";
export const getStockPrice = async (_, { symbol }) => {
    const options = {
        method: 'GET',
        url: 'https://yahoo-finance166.p.rapidapi.com/api/stock/get-price',
        params: {
            region: 'US',
            symbol: symbol
        },
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'yahoo-finance166.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        const priceData = response.data.quoteSummary.result[0].price;
        return {
            symbol: priceData.symbol,
            regularMarketPrice: priceData.regularMarketPrice.raw,
            regularMarketChange: priceData.regularMarketChange.raw,
            regularMarketChangePercent: priceData.regularMarketChangePercent.raw,
            marketState: priceData.marketState,
            name: priceData.shortName,
        };
    }
    catch (error) {
        throw new Error('Error fetching stock price data');
    }
};
