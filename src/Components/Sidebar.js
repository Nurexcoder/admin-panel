import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SecurityIcon from "@mui/icons-material/Security";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tabs from "./Tabs";
import { Inventory, People } from "@mui/icons-material";

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
const UpperNav = styled.div`
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
    margin:0 5px;
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

export default function Sidebar() {
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
                <Toolbar>
                    <UpperNav>
                        <NameContainer>
                            <Avatar>K</Avatar>
                            <HeaderText>Kishore</HeaderText>
                        </NameContainer>
                        <IconContainer>
                            <NotificationsIcon sx={{mx:"2px"}} />
                            <QuestionMarkIcon />
                        </IconContainer>
                    </UpperNav>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant='permanent'
                anchor='left'>
                {/* <Toolbar /> */}
                <LogoContainer>
                    <Image src='/images/Subtract.png' />
                    <LogoName>Admin Panel</LogoName>
                </LogoContainer>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                          <People/>
                        </ListItemIcon>
                        <ListItemText primary='Users' />
                    </ListItem>
                </List>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Inventory />
                        </ListItemIcon>
                        <ListItemText primary='Products' />
                    </ListItem>
                </List>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary='Orders' />
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component='main'
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
                <Toolbar />
                <Tabs/>
                
            </Box>
        </Box>
    );
}
