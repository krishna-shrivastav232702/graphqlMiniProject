export const graphqlSchema = `#graphql
    type stockPrice{
      symbol:String!
      regularMarketPrice:Float
      regularMarketChange:Float
      regularMarketChangePercent:Float
      marketState:String
  }

  type HistoricalDataPoint{
    timestamp:String
    price:Float
  }

  type Query{
    getStockChart(symbol:String!,range:String!,interval:String!):[HistoricalDataPoint]
    getStockPrice(symbol:String!):stockPrice
  }
`;
