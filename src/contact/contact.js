import React from "react";
import { useForm } from "react-hook-form";
function Contact(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
//////////////////////////////////////////
    const headers = new Headers()
        headers.append("Content-Type", "application/json")

    const body = {
        "test": "event"
    }

    const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(body),
    }
//////////////////////////////////////////////
fetch("https://eoq2uuazn32z1ot.m.pipedream.net", options)


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstname')} placeholder="first name" />
            <input {...register("secondname")} placeholder="second name" />

            <input type="submit" />
        </form>
    )

}

export default Contact;