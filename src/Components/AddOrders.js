import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import { TextField } from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import axios from "axios";
import { url } from "../config";
import styled from "styled-components";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    height: "83vh",
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

const Form = styled.form`
    padding: 30px 20px;
`;
const Input = styled(TextField)`
    margin: 15px 0 !important;
    width: 100%;
`;
const AddButton = styled(Button)`
    margin-top: 20px !important;
    width: 30%;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;
export default function AddOrders({ handleClose, isChanged, setIsChanged }) {
    const [options, setOptions] = useState([]);
    const [price, setPrice] = useState(0);
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${url}/products`);
            let tempOptions = [];
            res.data.map((opt) => {
                let tempOpt = {
                    value: opt,
                    label: opt.productName,
                    price: opt.price,
                };
                tempOptions.push(tempOpt);
            });
            setOptions(tempOptions);
        };
        getData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let curTodo = {
            username: e.target.username.value,
            products: selected,
            totalPrice: price,
            address: {
                town: e.target.town.value,
                streetName: e.target.streetName.value,
                pincode: e.target.pincode.value,
            },
        };
        // let key = JSON.parse(localStorage.getItem("keys")) || 0;
        // curTodo.push();
        try {
            const res = await axios.post(`${url}/orders`, curTodo);
        } catch (error) {
            alert("Something went wrong");
        }
        setIsChanged(!isChanged);
        handleClose();
    };
    const handleSelect = (e) => {
        setPrice(0);
        let products = [];
        e.map((s) => {
            setPrice((price) => price + s.price);
            console.log(s.value);
            products.push(s.value);
        });
        setSelected(products);
    };
    const customStyles = {
        option: (provided, state) => ({
            ...provided,

            backgroundColor: "white",
        }),

        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: "1px dotted pink",
            color: state.selectProps.menuColor,
            backgroundColor: "white",
            padding: 10,
        }),
    };
    console.log(selected);
    return (
        <div>
            <Box sx={style}>
              
                <Form onSubmit={handleSubmit}>
                    <Header>
                        <Typography
                            id='modal-modal-title'
                            align='center'
                            variant='h4'>
                            Add Order
                        </Typography>
                        <Button
                            onClick={handleClose}
                            align='right'
                            variant='outlined'
                            color='error'>
                            <Close />
                        </Button>
                    </Header>
                    <Input
                        id='outlined-basic'
                        label='Username'
                        variant='outlined'
                        name='username'
                    />
                    <Select
                        options={options}
                        isMulti
                        styles={customStyles}
                        onChange={(e) => handleSelect(e)}
                    />
                    <Input
                        id='outlined-basic'
                        label='Total Prices'
                        variant='outlined'
                        value={price}
                        disabled
                        name='totolPrice'
                    />
                    <Input
                        id='outlined-basic'
                        label='Street Name'
                        variant='outlined'
                        name='streetName'
                    />
                    <Input
                        id='outlined-basic'
                        label='Village/Town'
                        variant='outlined'
                        name='town'
                    />
                    <Input
                        id='outlined-basic'
                        label='Pincode'
                        variant='outlined'
                        type='number'
                        name='pincode'
                    />

                    <AddButton
                        type='submit'
                        variant='contained'
                        color='success'>
                        <Add /> Add
                    </AddButton>
                </Form>
            </Box>
        </div>
    );
}
