import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Container = ({children}:Props) => {
    return (
        <>
            <div className="container mx-auto max-w-screen-lg h-full">
                {children}
            </div>
        </>
    )
}

export default Container