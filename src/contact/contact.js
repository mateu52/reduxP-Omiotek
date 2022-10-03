import React from "react";
import { useForm } from "react-hook-form";
function Contact(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        //require("dotenv-webpack");
       
//////////////////////////////////////////
    const headers = new Headers()
        headers.append("Content-Type", "application/json")

    const body = {
        "test": "event12",
        "name": data.firstname
    }

    const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(body),
    }

//////////////////////////////////////////////
fetch(process.env.REACT_APP_CONTACT_FORM_URL, options)
}
console.log(process.env.REACT_APP_CONTACT_FORM_URL)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstname')} placeholder="first name" />
            <input {...register("secondname")} placeholder="second name" />

            <input type="submit" />
        </form>
    )

}

export default Contact;