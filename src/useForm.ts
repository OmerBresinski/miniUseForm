import { useState } from "react";

export interface Form {
    [fieldName: string]: string;
}

export const useForm = (initialForm: Form) => {
    const [form, setForm] = useState<Form>(initialForm);

    const handleChange = (fieldName: string, value: string) => {
        setForm((prevForm) => {
            return { ...prevForm, [fieldName]: value };
        });
    };

    return { form, handleChange };
};
