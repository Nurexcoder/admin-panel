// import {usefrom "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Link, Modal } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import AddUsers from "./AddUsers";

// const AccessButton = styled.div`
//     background: rgba(39, 174, 96, 0.3);
//     /* Green 2 */
//     width: 100%;
//     padding: 5px 10px;
//     border: 1px solid #27ae60;
//     text-align: center;
//     box-sizing: border-box;
//     border-radius: 20px;
// `;
// const DeniedButton = styled.div`
//     width: 100%;
//     padding: 5px 10px;
//     text-align: center;
//     background: rgba(255, 8, 8, 0.3);
//     /* expensive */

//     border: 1px solid #ff0808;
//     box-sizing: border-box;
//     border-radius: 20px;
// `;
const AddUserButton = styled(Button)``;

export default function Users({ isClicked, setIsClicked }) {
    const [data, setData] = useState([
        {
            id: 4,
            "Deparment/Role Name": "Supervisors",
            "Access Level": true,
            "No of Members": 1,
            "Last Updated": "1 min ago",
            View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
        },
    ]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const columns = [
        {
            field: "name",
            headerName:"Name",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 280,
        },
        // {
        //     field: "Access Level",
        //     headerClassName: "super-app-theme--header",
        //     headerAlign: "center",
        //     align: "center",
        //     width: 200,
        //     renderCell: (cellValues) => {
        //         return (
        //             <>
        //                 {cellValues.formattedValue ? (
        //                     <AccessButton variant='contained' color='primary'>
        //                         All Access
        //                     </AccessButton>
        //                 ) : (
        //                     <DeniedButton variant='contained' color='primary'>
        //                         Restricted Access
        //                     </DeniedButton>
        //                 )}
        //             </>
        //         );
        //     },
        // },
        {
            field: "username",
            headerName:"Username",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
        {
            field: "email",
            headerName:"Email",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
        {
            field: "phoneNo",
            headerName:"Phone Number",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
        // {
        //     field: "View",
        //     headerClassName: "super-app-theme--header",
        //     headerAlign: "center",
        //     align: "center",
        //     width: 140,
        //     renderCell: (cellValues) => {
        //         return (
        //             <Button onClick={() => setIsClicked(!isClicked)}>
        //                 <VisibilityIcon />
        //             </Button>
        //         );
        //     },
        // },
    ];

    // const rows = [
    //     {
    //         id: 1,
    //         "Deparment": "Tachers",
    //         "Access Level": true,
    //         "No of Members": 4,
    //         "Last Updated": "1 min ago",
    //         View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    //     },
    //     {
    //         id: 2,
    //         "Deparment/Role Name": "External Faculty ",
    //         "Access Level": false,
    //         "No of Members": 8,
    //         "Last Updated": "1 min ago",
    //         View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    //     },
    //     {
    //         id: 3,
    //         "Deparment/Role Name": "Lab Assistants",
    //         "Access Level": false,
    //         "No of Members": 16,
    //         "Last Updated": "1 min ago",
    //         View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    //     },
    //     {
    //         id: 4,
    //         "Deparment/Role Name": "Non-teaching staff",
    //         "Access Level": false,
    //         "No of Members": 4,
    //         "Last Updated": "1 min ago",
    //         View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    //     },
    //     {
    //         id: 4,
    //         "Deparment/Role Name": "Supervisors",
    //         "Access Level": true,
    //         "No of Members": 1,
    //         "Last Updated": "1 min ago",
    //         View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    //     },
    // ];
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("http://localhost:5000/users");
            let realData=[];
            console.log(res);
            res.data.forEach(element => {
               element.id=element._id;
                realData.push(element);
            });
            console.log(realData);
            setData(res.data);
            console.log(res);
        };
        getData();
    }, []);

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
            <AddUserButton
                color='success'
                variant='contained'
                onClick={handleOpen}>
                Add Users
            </AddUserButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <AddUsers handleClose={handleClose} />
            </Modal>
            <DataGrid
                options={{
                    paging: false,
                }}
                rows={data}
                pagination={false}
                columns={columns}
                // checkboxSelection
                // checkboxSelectionIcon={RadioButtonUncheckedIcon}
                // icons={{
                //     ColumnMenuIcon: RadioButtonUncheckedIcon,
                // }}
            />
        </Box>
    );
}
