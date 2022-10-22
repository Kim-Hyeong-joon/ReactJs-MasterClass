import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "candle",
              data:
                data?.map((price) => {
                  return {
                    x: new Date(price.time_close * 1000),
                    y: [
                      parseFloat(price.open),
                      parseFloat(price.high),
                      parseFloat(price.low),
                      parseFloat(price.close),
                    ],
                  };
                }) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: "candlestick",
              height: 300,
              width: 300,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: true },
            stroke: {
              curve: "smooth",
              width: 1,
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
              show: false,
            },
            xaxis: {
              tooltip: {
                enabled: true,
              },
              axisBorder: { show: false },
              labels: { show: true },
              axisTicks: { show: true },
              type: "datetime",
              /* categories: data?.map((price) =>
                new Date(price.time_close * 1000).toISOString()
              ), */
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
            },
            colors: ["red"],
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(3)} $`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
