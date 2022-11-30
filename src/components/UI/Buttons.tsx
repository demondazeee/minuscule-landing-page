type ButtonProps = {
    text: string
    color?: string
}


export const Button = ({text, color}:ButtonProps) => {
    return(
        <>
            <button className={`bg-white ${color} py-2 px-4 uppercase font-bold hover:bg-slate-300 rounded-md hover:duration-300`}>{text}</button>
        </>
    )
}
