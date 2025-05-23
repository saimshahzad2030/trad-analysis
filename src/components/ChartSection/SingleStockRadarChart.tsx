"use client";
import React from 'react';
import ReactECharts from 'echarts-for-react';

const SingleStockRadarChart = () => {
  const appleColor = ['#ff7c7c', '#ffbcbc'];

  const appleData = {
    name: 'AAPL',
    value: [25, 35, 60, 9, 1.2, 1.3, 250, 70], // Dummy values for indicators
  };

  const option = {
    color: [appleColor[0]],
    title: {
      text: 'Apple Financial Indicators',
      left: 'center',
      bottom: 0,
      textStyle: {
        fontSize: 20,
        color: '#fff',
      },
    },
    tooltip: {},
    legend: {
      data: [appleData.name],
      textStyle: {
        color: '#fff',
      },
    },
    radar: {
      indicator: [
        { name: 'ROC', max: 30 },
        { name: 'PE', max: 100 },
        { name: 'Gross Margin', max: 80 },
        { name: 'WACC', max: 15 },
        { name: 'D/E Ratio', max: 3 },
        { name: 'BetaEPS', max: 5 },
        { name: 'DCF', max: 300 },
        { name: 'FCFF', max: 100 },
      ],
      name: {
        textStyle: {
          color: '#fff',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#fff',
        },
      },
      splitLine: {
        lineStyle: {
          color: '#fff',
        },
      },
    },
    series: [
      {
        name: 'Apple',
        type: 'radar',
        data: [
          {
            value: appleData.value,
            name: appleData.name,
            areaStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  { offset: 0, color: appleColor[0] },
                  { offset: 1, color: appleColor[1] },
                ],
              },
              opacity: 0.6,
            },
            lineStyle: {
              color: appleColor[0],
              width: 2,
            },
            symbol: 'none',
          },
        ],
      },
    ],
  };

  return (
    <div className="col-span-2  bg-[#0d0d14] p-4 rounded-xl mt-8">
      <ReactECharts option={option} style={{ height: '500px' }} />
    </div>
  );
};

export default SingleStockRadarChart;
