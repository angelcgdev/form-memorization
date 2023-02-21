import { ChangeEvent, useState } from "react";
import { FormModel } from "../models/form.model";



const defaultValue:FormModel = {};

export const useForm = (initValue = defaultValue)=>{

    const [form, setForm] = useState<FormModel>(initValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>)=> {
        const { value, name } = e.target;
        setForm({...form, [name]: value});
    }

    const restoreDefault = ()=>{
        setForm(initValue);
    }

    const reset = ()=>{
        setForm(defaultValue);
    }

    return { form, handleChange, restoreDefault, defaultValue, reset };
}