import styled from "styled-components";

export const App = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const TextInput = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const Input = styled.input`
    font-size: 28px;
    padding: 8px 8px;
    color: #282828;
`;

export const Label = styled.label`
    font-size: 36px;
    width: 250px;
    text-align: center;
    color: #282828;
`;
