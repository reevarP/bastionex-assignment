import HomePage from "../Pages/HomePage/HomePage";
import { BsFillGiftFill, BsPersonFill } from "react-icons/bs";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import prof from "../Assets/evo.jpg";

export const noHeaderSidebarRoutesArr = ["/login"];

export const routingArray = [
    {
        forKey: 0,
        path: "/",
        element: <HomePage />,
    },
];

export const sidebarLinks = [
    {
        label: "My Profile",
        icon: <BsPersonFill fontSize={20} />,
    },
    {
        label: "Leaderboards",
        icon: <BiSolidBarChartAlt2 fontSize={20} />,
    },
    {
        label: "My Referrals",
        icon: <BsFillGiftFill fontSize={20} />,
    },
    {
        label: "Reports",
        icon: <HiOutlineClipboardDocumentList fontSize={20} />,
    },
];

export const leaderboardData = [
    {
        image: prof,
        name: "JEAN-LOUP AUTRET",
        earning: "2,1050.05 MLD",
        country: "Issy Les Moulneaux",
        positionChange: "+1",
    },
    {
        image: prof,
        name: "JAY PAUL",
        earning: "1950.00 MLD",
        country: "Issy Les Moulneaux",
        positionChange: "+2",
    },
    {
        image: prof,
        name: "ELIZA SAUN",
        earning: "1095.09 MLD",
        country: "Issy Les Moulneaux",
        positionChange: "-4",
    },
    {
        image: prof,
        name: "LOUP AUTRET",
        earning: "865 MLD",
        country: "Issy Les Moulneaux",
        positionChange: "+3",
    },
    {
        image: prof,
        name: "SHAMKAR LOY",
        earning: "660 MLD",
        country: "Issy Les Moulneaux",
        positionChange: "-2",
    },
];
