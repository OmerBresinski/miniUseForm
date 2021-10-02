import React from "react";
import * as S from "./style";

interface TextInputProps {
    label: string;
    value: string;
    fieldName: string;
    onChange: (fieldName: string, value: string) => void;
    type?: "password";
}

const TextInput = ({ label, value, fieldName, type, onChange }: TextInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(fieldName, e.target.value);
    };

    return (
        <S.TextInput>
            <S.Label htmlFor={fieldName}>{label}</S.Label>
            <S.Input name={fieldName} value={value} onChange={handleChange} type={type} />
        </S.TextInput>
    );
};

export default TextInput;
