import React from "react";
import { useForm } from "react-hook-form";
function Contact(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const headers = new Headers()
            headers.append("Content-Type", "application/json")

        const body = {
            //"test": "event12",
            "name": data.firstname,
            "surname": data.secondname
        }
        const options = {
            method: "POST",
            Authorization: `Bearer ${process.env.REACT_APP_CONTACT_FORM_KEY}`,
            headers,
            mode: "cors",
            body: JSON.stringify(body),
        }
    fetch(process.env.REACT_APP_CONTACT_FORM_URL, options)
        .then((res) => {
            if (res.ok) {
                console.log('ok');
            } else {
                console.log("error");
            }
        })
        
    
}
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstname')} placeholder="first name" />
            <input {...register("secondname")} placeholder="second name" />

            <input type="submit" />
        </form>
    )

}

export default Contact;