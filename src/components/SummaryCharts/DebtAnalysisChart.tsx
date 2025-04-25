"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { depthAnalysis } from "@/global/chartConstants";
import { poppins } from "@/fonts/fonts";

const DebtAnalysis = () => {
  const data = depthAnalysis.growth_profitability_chart_data.result;

  const chartData = [
    ["Year", "Total Debt", "Cash & Cash Equivalents"],
    ...data.map((entry) => [
      entry.annual.year,
      parseFloat(entry.annual.totalDebt.replace("B", "")),
      parseFloat(entry.annual.cashAndCashEquivalents.replace("B", "")),
    ]),
  ];

  const option = {
    color: ["#e74c3c", "#2ecc71"],
    legend: {
      bottom: 10,
      textStyle: { color: "#333" },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    dataset: {
      source: chartData,
    },
    xAxis: {
      type: "category",
      axisLabel: { color: "#333" },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} B",
        color: "#333",
      },
    },
    series: [
      { type: "bar", name: "Total Debt" },
      { type: "bar", name: "Cash & Cash Equivalents" },
    ],
    backgroundColor: "white",
  };

  return (
    <div className="w-full col-span-2 flex flex-col items-center">
      <div className="bg-white w-full rounded-2xl p-4 flex flex-col items-center">
        <ReactECharts
          option={option}
          style={{ height: "60vh", width: "100%" }}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
      <h2
        className={`text-2xl font-bold text-center mt-4 text-white ${poppins.className}`}
      >
        Depth Analysis
      </h2>
      <h2 className={`text-lg text-center text-white ${poppins.className}`}>
        (AAPL)
      </h2>
    </div>
  );
};

export default DebtAnalysis;
