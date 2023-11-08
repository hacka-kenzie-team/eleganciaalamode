export const SearchInput = () => {
    return (
        <div>
            <label htmlFor="search">PESQUISA</label>
            <input placeholder="Procure um item" id="search"></input>
        </div>
    )
}

export const FormInput = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <input placeholder={String(children)} id="search"></input>
        </div>
    )
}