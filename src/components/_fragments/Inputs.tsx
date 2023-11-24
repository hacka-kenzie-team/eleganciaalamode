'use client'
import { productStore } from "@/contexts/productStore"
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import { DefaultButton } from "./buttons/DefaultButton";


export const SearchInput = () => {
    const pathname = usePathname();
    const { push } = useRouter()
    const [input, setInput] = useState('');
    const { setSearchInput } = productStore((state) => state);
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchInput(input);
        if (pathname === "/" || pathname === "/products") {
            push("/products/all")
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center w-full justify-center gap-5">
            <input 
            placeholder="Procure um item"
            id="search" 
            onChange={handleInputChange}
            className="w-[300px] lg:w-[400px] h-12 rounded-md p-5 outline-none text-primary"/>
            <DefaultButton>
                <button type="submit">pesquisar</button>
            </DefaultButton>
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
            <input className="text-slate-800 placeholder-shown:text-slate-800 p-5 h-12 w-[280px] rounded-md sm:w-[380px] outline-none"
            placeholder={String(children)} type={type} {...register}></input>
            {error && <p className="text-red">{error.message}</p>}
        </div>
    )
}