export const GET_STOCK_CHART=`#graphql
    query GetStockChart(
        $symbol:String!,
        $range:String!,
        $interval:String!
    ){
        getStockChart(
            symbol:$symbol,
            range:$range,
            interval:$interval
            ){
                timestamp
                price
            }
    }
`;

export const GET_STOCK_PRICE=`#graphql
    query GetStockPrice($symbol:String!){
        getStockPrice(symbol:$symbol){
            symbol
            regularMarketPrice
            regularMarketChange
            regularMarketChangePercent
            marketState
            name
        }
    }
`