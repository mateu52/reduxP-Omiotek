import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { formState, formStateFail } from "../Message/redux"
import Message from "../Message/Message";
function Contact({ form_info, form_error }){
    const { register, handleSubmit } = useForm();
    const MessageState = () => { <Message /> }
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
                form_info()
                MessageState()
            } else {
                form_error()
                console.log("error");
            }
        })
        {<Message />}
}
MessageState();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstname')} placeholder="first name" />
            <input {...register("secondname")} placeholder="second name" />

            <input type="submit" />
            
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