// import {usefrom "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Link, Modal } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import AddOrders from "./AddOrders";
import { url } from "../config";

const AddOrderButton = styled(Button)`
    margin: 10px 0 !important;
`;
const Lists = styled.ul`
    overflow: scroll;
    ::-webkit-scrollbar{
        width: 0.5rem;
    }
`;

export default function Orders() {
    const [isChanged, setIsChanged] = useState(true);
    const [data, setData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const columns = [
        {
            field: "username",
            headerName: "Username",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 280,
        },

        {
            field: "products",
            headerName: "Products",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            minWidth: 280,
            renderCell: (cellValues) => {
                return (
                    <Lists>
                        {cellValues.formattedValue.map((product) => {
                            return (
                                <li>
                                    Product name:{product.productName} <br />
                                    Price:{product.price}
                                </li>
                            );
                        })}
                    </Lists>
                );
            },
        },
        {
            field: "totalPrice",
            headerName: "Total Price",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
        {
            field: "address",
            headerName: "Address",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            minWidth: 280,
            height: 200,
            renderCell: (cellValues) => {
                return (
                    <Lists>
                        <li>
                            <span>
                                Street Name:
                                {cellValues.formattedValue.streetName}
                            </span>
                        </li>
                        <li>
                            <span>Town/Village Name:</span>
                            {cellValues.formattedValue.townName}
                        </li>
                        <li>
                            <span>Pincode:</span>
                            {cellValues.formattedValue.pincode}
                        </li>
                    </Lists>
                );
            },
        },
    ];

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${url}/orders`);
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
            {/* <AddOrderButton
                color='success'
                variant='contained'
                onClick={handleOpen}>
                Add Orders
            </AddOrderButton> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <AddOrders
                    handleClose={handleClose}
                    isChanged={isChanged}
                    setIsChanged={setIsChanged}
                />
            </Modal>
            <DataGrid
                options={{
                    paging: false,
                }}
                rowHeight={100}
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
