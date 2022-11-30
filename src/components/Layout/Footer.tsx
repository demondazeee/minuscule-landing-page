import { H2 } from "../UI/Headings"
import Container from "./Container"
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-blue-500 p-10 text-white">
                <Container>
                    <div className="flex flex-col ">
                        <div className="flex gap-4 py-[3rem] justify-between font-semibold flex-wrap border-b-2 border-b-white max-md:text-center">
                           <div className="flex-1 min-w-[150px]">
                                <H2 text="Minuscule" />
                                <p>Lorem ipsum dolor sit amet.</p>
                           </div>
                           <div className="flex-1 min-w-[150px]">
                                <ul>
                                    <li><a href="#">Weekly Themes</a></li>
                                    <li><a href="#">Submit Themes</a></li>
                                    <li><a href="#">Daily Feeds</a></li>
                                </ul>
                           </div>
                           <div className="flex-1 min-w-[150px]">
                                <ul>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Themes Tweak</a></li>
                                </ul>
                           </div>
                           <div className="flex-1 min-w-[150px]">
                                <ul>
                                    <li><a href="#">Showcase</a></li>
                                    <li><a href="#">Widget Kit</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                           </div>
                           <div className="flex-1 min-w-[150px]">
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Affiliates</a></li>
                                    <li><a href="#">Resources</a></li>
                                </ul>
                           </div>
                        </div>
                        <div className="p-4 flex flex-col gap-2 items-center">
                            <ul className="flex gap-4">
                                <li>
                                    <div className="p-2 border-solid border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-500 hover:duration-700">
                                        <FaFacebookF size={20} />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-2 border-solid border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-500 hover:duration-700">
                                        <FaTwitter size={20} />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-2 border-solid border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-500 hover:duration-700">
                                        <FaInstagram size={20} />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-2 border-solid border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-500 hover:duration-700">
                                        <FaGithub size={20} />
                                    </div>
                                </li>
                            </ul>
                            <p>Connect with us!</p>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}


export default Footer