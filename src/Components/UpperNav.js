import { Avatar, Toolbar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import React from "react";
import styled from 'styled-components';


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
const Uppernav = styled.div`
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* width:1%; */
    /* justify-content: ; */
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
const UpperNav = () => {
    return (
        <Toolbar>
            <Uppernav>
                <NameContainer>
                    <Avatar>H</Avatar>
                    <HeaderText>Hibjul</HeaderText>
                </NameContainer>
                <IconContainer>
                    <NotificationsIcon sx={{ mx: "2px" }} />
                    <QuestionMarkIcon />
                </IconContainer>
            </Uppernav>
        </Toolbar>
    );
};

export default UpperNav;
