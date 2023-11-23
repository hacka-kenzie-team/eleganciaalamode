'use client'

import { useRouter } from "next/navigation"


export const CategoryButton = ({ children }: { children: React.ReactNode }) => {
    const { push } = useRouter()
    const handleCategoryClick = () => {
        push(`/products/${children}`)
    }

    return (
        <button
        onClick={() => handleCategoryClick()}
        type="button"
        className="min-w-[140px] border-2 border-red-900 rounded-[40px] text-center transition ease-in-out delay-150 bg-egray hover:bg-red-900 duration-300 shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300">
            {children}
        </button>
    )
}