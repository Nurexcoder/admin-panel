import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import axios from "axios";
import { url } from "../config";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    height: 500,
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
export default function AddUsers({ handleClose, isChanged, setIsChanged }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        let curTodo = {
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value,
            phoneNo: e.target.phoneNo.value,
        };
        // let key = JSON.parse(localStorage.getItem("keys")) || 0;
        // curTodo.push();
        const res = await axios.post(`${url}/users`, curTodo);
        // setIsChanged(!isChanged);
        handleClose();
    };
    return (
        <div>
            <Box sx={style}>
                <Typography id='modal-modal-title' align='center' variant='h4'>
                    Add User
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <Input
                        id='outlined-basic'
                        label='Name'
                        variant='outlined'
                        name='name'
                    />
                    <Input
                        id='outlined-basic'
                        label='Username'
                        variant='outlined'
                        multiline
                        name='username'
                    />
                    <Input
                        id='outlined-basic'
                        label='Email'
                        variant='outlined'
                        multiline
                        name='email'
                    />
                    <Input
                        id='outlined-basic'
                        label='Phono No'
                        variant='outlined'
                        multiline
                        name='phoneNo'
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
