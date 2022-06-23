import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Users from "./Users";
import SideBar from "./SideBar";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import UpperNav from "./UpperNav";
import Products from "./Products";
import Orders from "./Orders";


const drawerWidth = 220;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 25px;
`;
const Image = styled.img`
    margin-right: 4px;
    width: 1.8rem;
    height: auto;
`;

const LogoName = styled.h3`
    font-size: 1rem;
`;
const Icons = styled.img`
    width: 1.6rem;
    height: auto;
`;
const HeaderText = styled.span`
    color: black;
    margin: 0 5px;
`;
const NameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
`;
const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 8px;
`;

export default function Main() {
    return (
        <Box sx={{ display: "flex" }}>
            {/* <CssBaseline /> */}
            <AppBar
                position='fixed'
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    background: "transparent",
                    boxShadow: "none",
                    display: "flex",
                    flexDirection: "row-reverse",
                }}>
                <UpperNav />
            </AppBar>
            <SideBar />
            <Box
                component='main'
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
                <Toolbar />
                {/* <Users/> */}
                <Routes>
                    <Route path='/users' exact element={<Users />} />
                    <Route path='/products' exact element={<Products />} />
                    <Route path='/orders' exact element={<Orders />} />
                    <Route path='/' element={<Navigate to="/users"/>}/>
                </Routes>
            </Box>
        </Box>
    );
}
