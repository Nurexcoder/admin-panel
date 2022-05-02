import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
    Button,
    FormControlLabel,
    Link,
    Switch,
    TableCell,
    TableRow,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styledComponents from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";
const AccessButton = styledComponents.div`
    background: rgba(39, 174, 96, 0.3);
    /* Green 2 */
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #27ae60;
    text-align: center;
    box-sizing: border-box;
    border-radius: 20px;
`;
const DeniedButton = styledComponents.div`
    width: 100%;
    padding: 5px 10px;
    text-align: center;
    background: rgba(255, 8, 8, 0.3);
    /* expensive */

    border: 1px solid #ff0808;
    box-sizing: border-box;
    border-radius: 20px;
`;
const TotalDeniedButton = styledComponents.div`
    width: 100%;
    padding: 5px 10px;
    text-align: center;
    background: #F2F2F2;
    /* Gray 4 */
    
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
`;
const IOSSwitch = styled((props) => (
    <Switch
        focusVisibleClassName='.Mui-focusVisible'
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor:
                    theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                opacity: 1,
                border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color:
                theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
    },
}));
const columns = [
    {
        field: "dropdown",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 40,
        renderCell: (cellValues) => {
            return (
                <>
                    <AddCircleOutlineIcon />
                </>
            );
        },
    },
    {
        field: "Deparment/Role Name",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 240,
    },
    {
        field: "Access Level",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 200,
        renderCell: (cellValues) => {
            return (
                <>
                    {cellValues.formattedValue === true ? (
                        <AccessButton variant='contained' color='primary'>
                            All Access
                        </AccessButton>
                    ) : cellValues.formattedValue === null ? (
                        <TotalDeniedButton variant='contained' color='primary'>
                            No Access
                        </TotalDeniedButton>
                    ) : (
                        <DeniedButton variant='contained' color='primary'>
                            Restricted Access
                        </DeniedButton>
                    )}
                </>
            );
        },
    },
    {
        field: "Summary",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 240,
        renderCell: (cellValues) => {
            return (
                <>
                    {cellValues.formattedValue === true ? (
                        <>View|Create|Edit|Delete</>
                    ) : cellValues.formattedValue === null ? (
                        <></>
                    ) : (
                        <>View|Edit</>
                    )}
                </>
            );
        },
    },
    {
        field: "Last Updated",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 140,
    },
    {
        field: ".",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 140,
        renderCell: (cellValues) => {
            return (
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                />
            );
        },
    },
];

const rows = [
    {
        id: 1,
        "Deparment/Role Name": "Enrolling Students",
        "Access Level": true,
        Summary: true,
        "No of Members": 4,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 2,
        "Deparment/Role Name": "Financial Details",
        "Access Level": null,
        Summary: null,
        "No of Members": 8,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 3,
        "Deparment/Role Name": "Furniture order",
        "Access Level": false,
        Summary: false,
        "No of Members": 16,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 4,
        "Deparment/Role Name": "Technological Equipment",
        "Access Level": false,
        Summary: false,
        "No of Members": 4,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 4,
        "Deparment/Role Name": "Organisational Modification",
        "Access Level": true,
        Summary: true,
        "No of Members": 1,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 4,
        "Deparment/Role Name": "Permissions & Access Control",
        "Access Level": null,
        Summary: null,
        "No of Members": 1,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
];
const options = {
    filterType: "dropdown",
    responsive: "scroll",
    selectableRows: true,
    expandableRows: true, // Try Adding This
    renderExpandableRow: (rowData, rowMeta) => {
        console.log(rowData, rowMeta);
        return (
            <TableRow>
                <TableCell colSpan={rowData.length}>
                    Custom expandable row option. Data:{" "}
                    {JSON.stringify(rowData)}
                </TableCell>
            </TableRow>
        );
    },
};

export default function TableTwo({ setIsClicked, isClicked }) {
    return (
        <Box
            sx={{
                height: 500,
                width: 1,
                "& .super-app-theme--header": {
                    backgroundColor: "#F2F2F2",
                },
                mt: "15px",
            }}>
            <Button
                onClick={() => setIsClicked(!isClicked)}
                startIcon={<ArrowBackIcon />}>
                Back
            </Button>
            <DataGrid
                options={{
                    paging: false,
                }}
                rows={rows}
                pagination={false}
                columns={columns}
                options={options}
                // checkboxSelection
                // checkboxSelectionIcon={RadioButtonUncheckedIcon}
                // icons={{
                //     ColumnMenuIcon: RadioButtonUncheckedIcon,
                // }}
            />
        </Box>
    );
}
