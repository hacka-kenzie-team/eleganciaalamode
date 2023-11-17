'use client'
import { FieldError, UseFormRegisterReturn } from "react-hook-form"

export const SearchInput = () => {
    return (
        <div>
            <label htmlFor="search">PESQUISA</label>
            <input placeholder="Procure um item" id="search"></input>
        </div>
    )
}

interface IFormInputProps {
    children: React.ReactNode
    type: string
    error: FieldError | undefined
    register: UseFormRegisterReturn<string>
}

export const FormInput = ({children, type, register, error}: IFormInputProps) => {
    return (
        <div>
            <input className="text-slate-800 placeholder-shown:text-slate-800"
            placeholder={String(children)} type={type} {...register}></input>
            {error && <p className="text-red">{error.message}</p>}
        </div>
    )
}