import styled from "styled-components";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Container = styled(Box)`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    padding: 40px;
    border-radius: 40px;
    box-shadow: 10px 5px 10px #6495ED;
    background-color: white;
`;

export const TextMain = styled(Typography)`
    text-align: center;
    
`