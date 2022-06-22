import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import styled from "styled-components";
import TabOne from "./TabOne";

const Image = styled.img`
    width: 30px;
`;
const GridIcon=styled(CalendarViewMonthIcon)`
    margin: 0 5px;
`
export default function Tabs() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            {/* <TabContext value={value}> */}
                {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label='lab API tabs example'>
                        <Tab
                            sx={{
                                flexDirection: " row !important",
                                color:"red"
                            }}
                            TabIndicatorProps={{style: {color:'green'}}}
                            icon={<Image src='/images/Feed.png' />}
                            label={<span style={{ color: 'red' }}>Permissions</span>}
                            value='1'
                        />
                        <Tab
                            sx={{
                                flexDirection: " row !important",
                                
                            }}
                            icon={<GridIcon />}
                            label='Approval Matrix'
                            value='2'
                        />
                    </TabList>
                </Box> */}
                <TabOne/>
                {/* <TabPanel value='2'>Item Two</TabPanel> */}
            {/* </TabContext> */}
        </Box>
    );
}
