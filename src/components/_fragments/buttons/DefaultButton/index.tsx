import Link from "next/link"



export const DefaultButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Link href={"/login"}>
            <button className="bg-second px-8 h-12 rounded-md text-primary text-[22px]">{children}</button>
        </Link>
    )
}