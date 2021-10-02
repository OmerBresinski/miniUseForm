import TextInput from "./TextInput";
import { useForm } from "./useForm";
import * as S from "./style";

function Form1() {
    const { form, handleChange } = useForm({ username: "", password: "" });

    return (
        <S.App>
            <TextInput fieldName={"username"} label={"Username"} onChange={handleChange} value={form.userName} />
            <TextInput fieldName={"password"} label={"Password"} onChange={handleChange} value={form.password} type="password" />
        </S.App>
    );
}

function Form2() {
    const { form, handleChange } = useForm({ country: "", city: "", street: "", zipcode: "" });

    return (
        <S.App>
            <TextInput fieldName={"country"} label={"Country"} onChange={handleChange} value={form.country} />
            <TextInput fieldName={"city"} label={"City"} onChange={handleChange} value={form.city} />
            <TextInput fieldName={"street"} label={"Street"} onChange={handleChange} value={form.street} />
            <TextInput fieldName={"zipcode"} label={"Zipcode"} onChange={handleChange} value={form.zipcode} />
        </S.App>
    );
}

function Form3() {
    const { form, handleChange } = useForm({ email: "", color: "Blue" });

    return (
        <S.App>
            <TextInput fieldName={"email"} label={"Email"} onChange={handleChange} value={form.email} />
            <TextInput fieldName={"color"} label={"Favorite Color"} onChange={handleChange} value={form.color} />
        </S.App>
    );
}

export default Form1;
