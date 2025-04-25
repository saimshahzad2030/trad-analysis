"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { eps } from "@/global/chartConstants";
import { poppins } from "@/fonts/fonts";

const EPSProjectionChart = () => {
  // Sort ascending by year
  const sortedData = [...eps.eps_projection.result].sort(
    (a, b) => +a.year - +b.year
  );

  const years = sortedData.map((item) => item.year);
  const historicalData = sortedData.map((item) =>
    +item.year <= 2025 ? item.epsAvg : null
  );
  const forecastedData = sortedData.map((item) =>
    +item.year > 2025 ? item.epsAvg : null
  );

  const option = {
    title: {
      text: "EPS Projection (2020–2029)",
      left: "center",
      top: 10,
      textStyle: {
        fontFamily: poppins.className,
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: (params: any) => {
        return params
          .map(
            (p: any) =>
              `${p.seriesName}: <strong>$${p.value?.toFixed(2) ?? "-"}</strong>`
          )
          .join("<br/>");
      },
    },
    legend: {
      data: ["Historical EPS", "Forecasted EPS"],
      top: 40,
    },
    xAxis: {
      type: "category",
      data: years,
      axisLabel: { rotate: 45 },
    },
    yAxis: {
      type: "value",
      name: "EPS ($)",
      axisLabel: {
        formatter: "${value}",
      },
    },
    series: [
      {
        name: "Historical EPS",
        type: "bar",
        data: historicalData,
        barGap: 0,
        itemStyle: {
          color: "#3498db",
        },
      },
      {
        name: "Forecasted EPS",
        type: "bar",
        data: forecastedData,
        barGap: 0,

        itemStyle: {
          color: "#f39c12",
        },
      },
    ],
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
    },
    backgroundColor: "white",
  };

  return (
    <div className="w-full col-span-2 flex flex-col items-center">
      <div className="bg-white w-full rounded-2xl p-4">
        <ReactECharts
          option={option}
          style={{ height: "60vh", width: "100%" }}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
    </div>
  );
};

export default EPSProjectionChart;
