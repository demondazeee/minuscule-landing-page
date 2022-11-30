import { ReactNode } from "react"

type CardProps = {
    children: ReactNode
}

const Card = ({children}: CardProps) =>{
    return (
         <div className="shadow-[0_7px_20px_0px_rgba(100,100,111,0.2)] bg-white p-4">
            {children}
         </div>
    )
}

export default Card

