import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Dashboard, Inventory, People } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

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
const ListT = styled(ListItem)`
    background-color: ${(props) => props.selected && "rgba(0,0,0,0.7)"};
`;

const drawerWidth = 220;
const SideBar = () => {
    const location = useLocation();
    console.log(location);
    return (
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
                <Dashboard/>
                <LogoName>Admin Panel</LogoName>
            </LogoContainer>
            <List>
                <Link to='/users'>
                    <ListT
                        selected={
                            location.pathname.includes("/users") ? true : false
                        }
                        button>
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary='Users' />
                    </ListT>
                </Link>
            </List>
            <List>
                <Link to='/products'>
                    <ListT
                        selected={
                            location.pathname.includes("/products")
                                ? true
                                : false
                        }
                        button>
                        <ListItemIcon>
                            <Inventory />
                        </ListItemIcon>
                        <ListItemText primary='Products' />
                    </ListT>
                </Link>
            </List>
            <List>
                <Link to='/orders'>
                    <ListT
                        selected={
                            location.pathname.includes("/orders") ? true : false
                        }
                        button>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary='Orders' />
                    </ListT>
                </Link>
            </List>
        </Drawer>
    );
};

export default SideBar;
