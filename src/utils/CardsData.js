import { MdOutlineCameraEnhance } from "react-icons/md";
import { BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

export const CardsData = [
  {
    bgColor: "bg-lightGreenBg",
    name: "Total Revenues",
    iconImage: <MdOutlineCameraEnhance />,
    data: "$2,129,430",
  },
  {
    bgColor: "bg-lightPinkBg",
    name: "Total Transactions",
    iconImage: <BsTags />,
    data: "5342",
  },
  {
    bgColor: "bg-darkPinkBg",
    name: "Total Likes",
    iconImage: <AiOutlineLike />,
    data: "4300",
  },
  {
    bgColor: "bg-lightBrindleBg",
    name: "Total Users",
    iconImage: <FiUsers />,
    data: "900",
  },
];
