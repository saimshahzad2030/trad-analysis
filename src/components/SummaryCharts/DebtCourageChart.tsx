"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { depthLevelCourage } from "@/global/chartConstants";
import { poppins } from "@/fonts/fonts";

const DebtCourageChart = () => {
  const result = depthLevelCourage.growth_profitability_chart_data.result;

  const option = {
    color: ["#0c969C", "#0A7075"],
    legend: {
      bottom: 10,
      textStyle: { color: "#333" },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    dataset: {
      source: [
        ["Type", "Total Assets", "Total Liabilities"],
        [
          "Annual - Short Term",
          parseFloat(
            result.annual.shortTerm.totalCurrentAssets.replace("B", "")
          ),
          parseFloat(
            result.annual.shortTerm.totalCurrentLiabilities.replace("B", "")
          ),
        ],
        [
          "Annual - Long Term",
          parseFloat(
            result.annual.longTerm.totalNonCurrentAssets.replace("B", "")
          ),
          parseFloat(
            result.annual.longTerm.totalCurrentLiabilities.replace("B", "")
          ),
        ],
        // [
        //   "Quarterly - Short Term",
        //   parseFloat(
        //     result.quarterly.shortTerm.totalCurrentAssets.replace("B", "")
        //   ),
        //   parseFloat(
        //     result.quarterly.shortTerm.totalCurrentLiabilities.replace("B", "")
        //   ),
        // ],
        // [
        //   "Quarterly - Long Term",
        //   parseFloat(
        //     result.quarterly.longTerm.totalNonCurrentAssets.replace("B", "")
        //   ),
        //   parseFloat(
        //     result.quarterly.longTerm.totalCurrentLiabilities.replace("B", "")
        //   ),
        // ],
      ],
    },
    xAxis: {
      type: "category",
      axisLabel: { color: "#333" },
    },
    yAxis: {
      type: "value",
      axisLabel: { formatter: "{value} B", color: "#333" },
    },
    series: [
      {
        type: "bar",
      },
      {
        type: "bar",
      },
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
        Growth & Profitability
      </h2>
      <h2 className={`text-lg text-center text-white ${poppins.className}`}>
        ({result.symbol})
      </h2>
    </div>
  );
};

export default DebtCourageChart;
