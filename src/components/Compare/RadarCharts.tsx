"use client";
import React from "react";
import ReactECharts from "echarts-for-react";

const RadarCharts = () => {
  const colors = {
    AAPL: ["#ff7c7c", "#ffbcbc"],
    MSFT: ["#7cb5ff", "#cce4ff"],
    GOOGL: ["#7cffcb", "#b2f5df"],
  };

  const stockData = [
    {
      name: "AAPL",
      value: [25, 35, 60, 9, 1.2, 1.3, 250, 70],
      color: colors.AAPL,
    },
    {
      name: "MSFT",
      value: [20, 40, 65, 10, 1.5, 1.7, 270, 75],
      color: colors.MSFT,
    },
    {
      name: "GOOGL",
      value: [22, 32, 55, 8, 1.1, 1.2, 240, 60],
      color: colors.GOOGL,
    },
  ];

  const option = {
    title: {
      text: "Financial Radar Comparison",
      left: "center",
      bottom: 0,
      textStyle: {
        fontSize: 20,
        color: "#fff",
      },
    },
    tooltip: {},
   legend: {
  data: stockData.map((s) => s.name),
  textStyle: {
    color: "#fff",
    rich: {
      AAPL: {
        color: colors.AAPL[0],
        fontWeight: 'bold',
      },
      MSFT: {
        color: colors.MSFT[0],
        fontWeight: 'bold',
      },
      GOOGL: {
        color: colors.GOOGL[0],
        fontWeight: 'bold',
      },
    },
  },
  formatter: function (name:string) {
    return `{${name}|${name}}`;
  },
},

    radar: {
      indicator: [
        { name: "ROC", max: 30 },
        { name: "PE", max: 100 },
        { name: "Gross Margin", max: 80 },
        { name: "WACC", max: 15 },
        { name: "D/E Ratio", max: 3 },
        { name: "BetaEPS", max: 5 },
        { name: "DCF", max: 300 },
        { name: "FCFF", max: 100 },
      ],
      name: {
  formatter: (name:string) => name,
  textStyle: {
    color: "#fff",
  },
}
,
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
  series: [
  {
    type: "radar",
    data: stockData.map((stock) => ({
      value: stock.value,
      name: stock.name,
      label: {
        show: true,
        color: stock.color[0],
        fontWeight: "bold",
      },
      areaStyle: {
        color: {
          type: "radial",
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            { offset: 0, color: stock.color[0] },
            { offset: 1, color: stock.color[1] },
          ],
        },
        opacity: 0.4,
      },
      lineStyle: {
        color: stock.color[0],
        width: 2,
      },
      symbol: "none",

      // 🔧 THIS LINE IS THE FIX
      itemStyle: {
        color: stock.color[0], // This sets the color of the square box in the legend
      },
    })),
  },
],

  };
  return (
    <div className="col-span-2 bg-[#0d0d14] p-4 rounded-xl mt-8">
      <ReactECharts option={option} style={{ height: "500px" }} />
    </div>
  );
};

export default RadarCharts;
