import { getStockChart } from "./stockChart.resolver.js"
import { getStockPrice } from "./stockPrice.resolver.js"


export const resolver = {
    Query:{
        getStockPrice,
        getStockChart,
    }
}
