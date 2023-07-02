import React from "react";
import "./dashboard.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import RightMenu from "../RightMenu/RightMenu";
import Cards from "../Cards/Cards";
import Activities from "../Activities/Activities";
import BottomData from "../BottomData/BottomData";

const Dashboard = () => {
  return (
    <div className="dashboard-container h-screen w-full">
      <div className="dashboard-glass-container w-full h-full">
        <LeftMenu />
        <div className="dashboard-right-side">
          <RightMenu />
          <Cards />
          <Activities />
          <BottomData />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
