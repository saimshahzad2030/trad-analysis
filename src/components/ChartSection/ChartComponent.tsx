"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { emaChartData } from "@/global/chartConstants"; // adjust the import path as needed
import { poppins } from "@/fonts/fonts";

const ChartComponent = () => {
  const data = emaChartData["ema-chart-data"].result.reverse(); // Oldest to newest

  const dates = data.map((item) => item.date);
  const candlestickData = data.map((item) => [
    +item.open,
    +item.close,
    +item.low,
    +item.high,
  ]);
  const emaData = data.map((item) => +item.ema);

  const option = {
    legend: {
      data: ["Price", "EMA"],
      inactiveColor: "#777",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        animation: false,
        lineStyle: {
          color: "#376df4",
          width: 2,
          opacity: 1,
        },
      },
    },
    xAxis: {
      type: "category",
      data: dates,
      scale: true,
      boundaryGap: false,
      axisLine: { lineStyle: { color: "#8392A5" } },
    },
    yAxis: {
      scale: true,
      axisLine: { lineStyle: { color: "#8392A5" } },
      splitLine: { show: false },
    },
    dataZoom: [
      {
        type: "slider",
        start: 0,
        end: 100,
        height: 30,
        bottom: 20,
        handleSize: "100%",
        handleStyle: {
          color: "#376df4",
        },
        textStyle: {
          color: "#8392A5",
        },
      },
      {
        type: "inside",
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      top: 40,
      bottom: 80,
      containLabel: true,
    },
    series: [
      {
        name: "Price",
        type: "candlestick",
        data: candlestickData,
        itemStyle: {
          color: "#f87171",
          color0: "#4ade80",
          borderColor: "#f87171",
          borderColor0: "#4ade80",
        },
      },
      {
        name: "EMA",
        type: "line",
        data: emaData,
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1.5,
          color: "#3b82f6",
        },
      },
    ],
    backgroundColor: "#13131f",
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center">
      <div className="  w-full rounded-2xl p-2 flex flex-col items-center shadow-md">
        <ReactECharts
          option={option}
          style={{ height: "75vh", width: "100%" }}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
      <h2
        className={`text-2xl font-bold text-center mt-4 text-white ${poppins.className}`}
      >
        Price with EMA
      </h2>
      <h2
        className={`text-xl font-semibold text-center text-white ${poppins.className}`}
      >
        ({data[0].date.split(" ")[0]})
      </h2>
    </div>
  );
};

export default ChartComponent;
