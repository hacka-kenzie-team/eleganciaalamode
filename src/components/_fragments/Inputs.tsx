'use client'
import { productStore } from "@/contexts/productStore"
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import Image from "next/image"


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
        <form onSubmit={handleSearchSubmit}
        className="flex gap-3 min-w-full justify-end">
            <label htmlFor="search">PESQUISA</label>
            <input 
            placeholder="Procure um item"
            id="search" 
            onChange={handleInputChange}
            className="text-black"/>
            <button type="submit">
                <Image
                    src={"/icons/search-glass.svg"}
                    height={30}
                    width={30}
                    alt="Ícone de uma lupa para pesquisa"
                />
            </button>
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
            {error && <p className="p-1 text-xs">{error.message}</p>}
        </div>
    )
}