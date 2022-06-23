import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import axios from "axios";
import { url } from "../config";

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
    margin-top: 20px !important;
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
export default function AddProducts({ handleClose, isChanged, setIsChanged }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        let curTodo = {
            productName: e.target.productName.value,
            about: e.target.about.value,
            categories: e.target.categories.value.split(" "),
            price: e.target.price.value,
            availablePieces: e.target.availablePieces.value,
        };
        // let key = JSON.parse(localStorage.getItem("keys")) || 0;
        // curTodo.push();
        try {
            const res = await axios.post(`${url}/products`, curTodo);
        } catch (error) {
            alert("Something went wrong");
        }
        setIsChanged(!isChanged);
        handleClose();
    };
    return (
        <div>
            <Box sx={style}>
                <Form onSubmit={handleSubmit}>
                    <Header>
                        <Typography
                            id='modal-modal-title'
                            align='center'
                            variant='h4'>
                            Add Product
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
                        required
                        label='Product Name'
                        variant='outlined'
                        name='productName'
                    />
                    <Input
                        required
                        id='outlined-basic'
                        label='About'
                        variant='outlined'
                        multiline
                        rows={3}
                        name='about'
                    />
                    <Input
                        required
                        id='outlined-basic'
                        label='Categories (Space seperated)'
                        variant='outlined'
                        name='categories'
                    />
                    <Input
                        required
                        id='outlined-basic'
                        label='Price'
                        variant='outlined'
                        type='number'
                        name='price'
                        // onWheel={(e) => e.currentTarget.blur()}
                    />
                    <Input
                        required
                        id='outlined-basic'
                        label='Available Pieces'
                        variant='outlined'
                        type='number'
                        name='availablePieces'
                        // onWheel={(e) => e.currentTarget.blur()}
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
