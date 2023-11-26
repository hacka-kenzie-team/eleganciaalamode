'use client'

import { useRouter } from "next/navigation"

export const CategoryButton = ({ children }: { children: React.ReactNode }) => {
    const { push } = useRouter()

    const getCategory = () => {
        if (String(children) === "Acessórios"){
            return "Acessorios";
        } else if (String(children) === "Calçados"){
            return "Calcados";
        } else {
            return String(children);
        };
    };

    const handleCategoryClick = () => {
        push(`/products/${getCategory()}`)
    }

    return (
        <div>
            <button type="button" onClick={() => handleCategoryClick()}>
                <h3 className="border px-2 border-second rounded-md">{children}</h3>
            </button>
        </div>
    )
}