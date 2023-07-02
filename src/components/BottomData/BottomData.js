import React from "react";
import "./BottomData.css";
import { PieChart, Pie, Cell } from "recharts";
import { AiOutlineDown } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { Schedules } from "../../utils/Schedules";

function BottomData() {
  const data = [
    { name: "Basic Tees", value: 400 },
    { name: "Custom Short Pants", value: 300 },
    { name: "Super Hoodles", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bottom-data-container my-10">
      <div className="top-products-container p-5  bg-white  rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="text-base lg:text-lg text-black font-bold">
            Top products
          </h1>
          <div className="text-xs lg:text-sm text-primaryText flex justify-between items-center">
            <span className="mr-1">May - June2021</span> <AiOutlineDown />
          </div>
        </div>
        <div className="flex justify-around items-center mt-3">
          <PieChart className="pie-chart-container" width={150} height={150}>
            <Pie
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="pie-chart-right">
            {data.map((entry, index) => (
              <div key={index} className="pb-1">
                <div className="text-sm  flex justify-start items-center">
                  <span style={{ color: COLORS[index % COLORS.length] }}>
                    <GoDotFill />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs lg:text-sm text-left font-bold">
                      {data[index % COLORS.length].name}
                    </span>
                    <span className="text-xs text-primaryText">
                      {((data[index % COLORS.length].value / 100) * 10).toFixed(
                        0
                      )}
                      %
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="schedules-container bg-white p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="text-base lg:text-lg text-black font-bold">
            Today's schedule
          </h1>
          <div className="text-xs lg:text-sm text-primaryText flex justify-between items-center">
            <span className="mr-1">See All</span> <IoIosArrowForward />
          </div>
        </div>
        <div className="items mt-3">
          {Schedules.map((data, index) => (
            <div
              key={index}
              className={`border-4 border-t-0 border-r-0 border-b-0 ${data.bgColor}  each-item mb-2 pl-2`}
            >
              <h1 className="text-secondaryText sm:text-xs lg:text-sm font-bold">
                {data.name}
              </h1>
              <p className="text-xs text-lightText">{data.date}</p>
              <p className="text-xs text-lightText">{data.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomData;
