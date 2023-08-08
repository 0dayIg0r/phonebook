import {InputHTMLAttributes, TextareaHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}


export function Input({...rest}: InputProps){
    return(
        <input {...rest}/>
    )
}

