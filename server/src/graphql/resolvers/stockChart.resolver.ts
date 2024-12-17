import axios from "axios"

export const getStockChart = async(_:any,{symbol,range,interval}:{symbol:string; range:string; interval:string})=>{
    const options={
        method:'GET',
        url:'https://yahoo-finance166.p.rapidapi.com/api/stock/get-chart',
        params:{region:"US",symbol,range,interval},
        headers:{
            'X-RapidAPI-Key':process.env.RAPID_API_KEY,
            'X-RapidAPI-Host':'yahoo-finance166.p.rapidapi.com',
        },
    };


    try{
        const response = await axios.request(options);
        const timestamps = response.data.chart.result[0].timestamp;
        const prices = response.data.chart.result[0].indicators.quote[0].close;

        return timestamps.map((time:number,index:number)=>({
            timestamp:new Date(time*1000).toLocaleString(),
            price:prices[index],
        }));
    }catch(error){
        throw new Error(`Error fetching stock chart data`);
    }
}
