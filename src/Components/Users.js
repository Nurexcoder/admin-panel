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
import { url } from "../config";

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
const AddUserButton = styled(Button)`
    margin:10px 0 !important;
`;

export default function Users() {
    const [isChanged, setIsChanged] = useState(true);
    const [data, setData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const columns = [
        {
            field: "name",
            headerName: "Name",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 280,
        },

        {
            field: "username",
            headerName: "Username",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
        {
            field: "email",
            headerName: "Email",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
        {
            field: "phoneNo",
            headerName: "Phone Number",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
    ];

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${url}/users`);
            let realData = [];
            console.log(res);
            res.data.forEach((element) => {
                element.id = element._id;
                realData.push(element);
            });
            console.log(realData);
            setData(res.data);
            console.log(res);
        };
        getData();
    }, [isChanged]);

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
                <AddUsers
                    handleClose={handleClose}
                    isChanged={isChanged}
                    setIsChanged={setIsChanged}
                />
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
