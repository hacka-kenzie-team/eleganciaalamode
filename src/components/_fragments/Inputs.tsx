'use client'
import { productStore } from "@/contexts/productStore"
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form"


export const SearchInput = () => {
    const [input, setInput] = useState('');
    const { setSearchInput } = productStore((state) => state);
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchInput(input);
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (
        <form onSubmit={handleSearchSubmit}>
            <label htmlFor="search">PESQUISA</label>
            <input 
            placeholder="Procure um item"
            id="search" 
            onChange={handleInputChange}/>
            <button type="submit">PESQUISAR</button>
        </form>
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