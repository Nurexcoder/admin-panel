// import {usefrom "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Link, Modal } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import AddProducts from "./AddProducts";
import { url } from "../config";


const AddProductButton = styled(Button)`
    margin:10px 0 !important;
`;

export default function Products() {
    const [isChanged, setIsChanged] = useState(true);
    const [data, setData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const columns = [
        {
            field: "productName",
            headerName: "Product Name",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },

        {
            field: "about",
            headerName: "About",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 220,
        },
        {
            field: "categories",
            headerName: "Categories",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 180,
            renderCell:(cellValues)=>{
                return(
                    <>
                        {cellValues.formattedValue.map(val=> '#'+val+' ')}
                    </>
                )
            }
        },
        {
            field: "price",
            headerName: "Price(₹)",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 180,
        },
        {
            field: "availablePieces",
            headerName: "Available Price",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
    ];

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${url}/products`);
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
            <AddProductButton
                color='success'
                variant='contained'
                onClick={handleOpen}>
                Add Products
            </AddProductButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <AddProducts
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
