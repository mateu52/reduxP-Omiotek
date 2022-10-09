import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { formState, formStateFail } from "../Message/redux"
import Message from "../Message/Message";
function Contact({ form_info, form_error }){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const headers = new Headers()
            headers.append("Content-Type", "application/json")

        const body = {
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
                form_info()
            } else {
                form_error()
                console.log("error");
            }
        })
}
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstname' , { required: true})} placeholder="first name" />
            {errors.firstname?.type === 'required' && <p role="alert">First name is required{form_error()}</p>}
            <input {...register("secondname")} placeholder="second name" />

            <input type="submit" />
            <Message />
        </form>   
    )
}
function mapDispatchToProps(dispatch){
    return{
        form_info: () => dispatch(formState()),
        form_error: () => dispatch(formStateFail())
    }
}

export default connect(null, mapDispatchToProps)(Contact);