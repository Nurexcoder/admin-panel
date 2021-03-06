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
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
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
        try {
            const res = await axios.post(`${url}/users`, curTodo);
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
                            Add User
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
                        required
                        id='outlined-basic'
                        label='Name'
                        variant='outlined'
                        name='name'
                    />
                    <Input
                        required
                        id='outlined-basic'
                        label='Username'
                        variant='outlined'
                        name='username'
                    />
                    <Input
                        required
                        id='outlined-basic'
                        label='Email'
                        variant='outlined'
                        name='email'
                    />
                    <Input
                        required
                        id='outlined-basic'
                        label='Phono No'
                        variant='outlined'
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
