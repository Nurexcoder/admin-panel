import { Button } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import TableThree from "./TableThree";

const Container = styled.div`
    padding: 10px 25px;
`;
const ButtonRow = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
    align-items: center;
`;
const AddButton = styled(Button)`
    background-color: #b73a3a !important;
    color: white !important;
    outline: none !important;
    border: none !important;
`;
const IconContainer = styled.div`
    display: flex;
    width: 60px;
    justify-content: space-between;
    align-items: center;
    color: #a6a1a1 !important;
`;
const Edit = styled(EditIcon)`
    transform: scale(1.1);
`;
const Delete = styled(DeleteIcon)`
    transform: scale(1.1);
`;
const TabOne = () => {
    const [isClicked, setIsClicked] = useState(true);
    console.log(isClicked);
    return (
        <Container>
            <ButtonRow>
                <AddButton variant='outlined' startIcon={<AddIcon />}>
                    AddRole
                </AddButton>
                <IconContainer>
                    <Edit />
                    <Delete />
                </IconContainer>
            </ButtonRow>

            {!isClicked ? (
                <TableOne setIsClicked={setIsClicked} isClicked={isClicked} />
            ) : (
                <TableTwo setIsClicked={setIsClicked} isClicked={isClicked} />
            )}
        </Container>
    );
};

export default TabOne;
