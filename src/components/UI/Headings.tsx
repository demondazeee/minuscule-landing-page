type HeadingProps = {
    text: string
}


export const H2 = ({text}: HeadingProps) => <h2 className="text-[3vh] font-bold max-lg:text-[2.vh]">{text}</h2>