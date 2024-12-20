import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { GET_STOCK_CHART } from "./query/query";


import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartProps {
    symbol: string;
    range: string;
    interval: string;
}

const StockChart: React.FC<ChartProps> = ({ symbol, range, interval }) => {
    const [chartData, setChartData] = useState<{ labels: string[]; data: number[] }>({
        labels: [],
        data: [],
    });
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data started")
                const response = await axios.post(import.meta.env.VITE_GRAPHQL_SERVER, {
                    query: GET_STOCK_CHART,
                    variables: { symbol, range, interval },
                });

                const { getStockChart } = response.data.data;

                const labels = getStockChart.map((point: { timestamp: string }) => point.timestamp);
                const prices = getStockChart.map((point: { price: number }) => point.price);

                setChartData({ labels, data: prices });
            } catch (error) {
                console.error("Error fetching chart data:", error);
                setError("Error fetching chart data");
            }
        }

        fetchData();
    }, [symbol, range, interval]);


    return (
        <div>
            <h2>Stock Chart for {symbol}</h2>
            {error ? (
                <p>{error}</p>
            ) : (
                <Line
                    data={{
                        labels: chartData.labels,
                        datasets: [
                            {
                                label: "Stock Price",
                                data: chartData.data,
                                borderColor: "rgba(75,192,192,1)",
                                backgroundColor: "rgba(75,192,192,0.2)",
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: "top",
                            },
                        },
                    }}
                />
            )}
        </div>
    )
}

export default StockChart;