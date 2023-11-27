import Link from "next/link"



export const DefaultButton = ({ children }: { children: React.ReactNode}) => {
    return (
        <span className="bg-second py-2 px-6 rounded-md text-primary text-[22px] md:hover:scale-[1.02] transition-all">{children}</span>
    )
}