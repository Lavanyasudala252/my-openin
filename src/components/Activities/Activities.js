import React from "react";
import "./charts.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineDown } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

const data = [
  {
    name: "Week 1",
    user: 6000,
    guest: 4000,
    amt: 0,
  },
  {
    name: "Week 2",
    user: 2000,
    guest: 1000,
    amt: 600,
  },
  {
    name: "Week 3",
    user: 2000,
    guest: 6000,
    amt: 750,
  },
  {
    name: "Week 4",
    user: 5000,
    guest: 3908,
    amt: 600,
  },
];

function Activities() {
  return (
    <div className="my-10 w-full bg-white p-5 rounded-xl">
      <div className="chart-text-container">
        <div>
          <h1 className="text-base lg:text-lg text-black font-bold">
            Activities
          </h1>
          <div className="text-xs lg:text-sm text-primaryText flex justify-between items-center">
            <span className="mr-1">May - June2021</span> <AiOutlineDown />
          </div>
        </div>
        <div className="chat-right-side">
          <div className="text-sm  flex justify-start items-center">
            <span className="text-lightRed">
              <GoDotFill />
            </span>
            <span>Guest</span>
          </div>
          <div className="text-sm flex justify-start items-center">
            <span className="text-lightGreen">
              <GoDotFill />
            </span>
            <span>User</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="98%" height={250}>
        <LineChart height={300} data={data}>
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis
            tick={{ fill: "#858585" }}
            scale="point"
            dataKey="name"
            tickLine={false}
            padding={{ left: 30 }}
            style={{
              fontSize: "0.875rem",
              fontFamily: "Lato",
            }}
          />
          <YAxis
            tick={{ fill: "#858585" }}
            axisLine={false}
            dx={0}
            tickLine={false}
            style={{
              fontSize: "0.875rem",
              fontFamily: "Lato",
            }}
          />
          <Line
            type="monotone"
            dataKey="guest"
            stroke="#E9A0A0"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="user" stroke="#9BDD7C" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activities;
