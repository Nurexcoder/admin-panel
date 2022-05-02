import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import styled from "styled-components";

const AccessButton = styled.div`
    background: rgba(39, 174, 96, 0.3);
    /* Green 2 */
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #27ae60;
    text-align: center;
    box-sizing: border-box;
    border-radius: 20px;
`;
const DeniedButton = styled.div`
    width: 100%;
    padding: 5px 10px;
    text-align: center;
    background: rgba(255, 8, 8, 0.3);
    /* expensive */

    border: 1px solid #ff0808;
    box-sizing: border-box;
    border-radius: 20px;
`;

export default function TableOne({ isClicked, setIsClicked }) {
    const columns = [
        {
            field: "Deparment/Role Name",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 262,
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
                        {cellValues.formattedValue ? (
                            <AccessButton variant='contained' color='primary'>
                                All Access
                            </AccessButton>
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
            field: "No of Members",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
        {
            field: "Last Updated",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 140,
        },
        {
            field: "View",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 140,
            renderCell: (cellValues) => {
                return (
                    <Button onClick={() => setIsClicked(!isClicked)}>
                        <VisibilityIcon />
                    </Button>
                );
            },
        },
    ];

    const rows = [
        {
            id: 1,
            "Deparment/Role Name": "Tachers",
            "Access Level": true,
            "No of Members": 4,
            "Last Updated": "1 min ago",
            View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
        },
        {
            id: 2,
            "Deparment/Role Name": "External Faculty ",
            "Access Level": false,
            "No of Members": 8,
            "Last Updated": "1 min ago",
            View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
        },
        {
            id: 3,
            "Deparment/Role Name": "Lab Assistants",
            "Access Level": false,
            "No of Members": 16,
            "Last Updated": "1 min ago",
            View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
        },
        {
            id: 4,
            "Deparment/Role Name": "Non-teaching staff",
            "Access Level": false,
            "No of Members": 4,
            "Last Updated": "1 min ago",
            View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
        },
        {
            id: 4,
            "Deparment/Role Name": "Supervisors",
            "Access Level": true,
            "No of Members": 1,
            "Last Updated": "1 min ago",
            View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
        },
    ];

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
            <DataGrid
                options={{
                    paging: false,
                }}
                rows={rows}
                pagination={false}
                columns={columns}
                checkboxSelection
                // checkboxSelectionIcon={RadioButtonUncheckedIcon}
                // icons={{
                //     ColumnMenuIcon: RadioButtonUncheckedIcon,
                // }}
            />
        </Box>
    );
}
