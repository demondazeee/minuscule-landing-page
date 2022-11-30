const NavBar = () => {
    return (
        <nav className="flex justify-between  max-md:flex-col max-lg:items-center max-lg:gap-4">
            <h2 className="text-2xl font-bold">Minuscule</h2>
            <ul className="flex items-center gap-10">
                <li className="">
                    <a className="pb-2 hover:border-b-2 hover:border-b-white" href="#">Home</a>
                </li>
                <li>
                    <a className="pb-2 hover:border-b-2 hover:border-b-white" href="#">About</a>
                </li>
                <li>
                    <a className="pb-2 hover:border-b-2 hover:border-b-white" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
