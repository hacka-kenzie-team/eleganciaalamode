'use client'

import { useRouter } from "next/navigation"
import { DefaultButton } from "../DefaultButton"


export const CategoryButton = ({ children }: { children: React.ReactNode }) => {
    const { push } = useRouter()
    const handleCategoryClick = () => {
        push(`/products/${children}`)
    }

    return (
        <DefaultButton>
            <button type="button" onClick={() => handleCategoryClick()}>
                {children}
            </button>
        </DefaultButton>
    )
}