import {Button} from "../UI/Buttons"
import { H2 } from "../UI/Headings"
import Container from "./Container"
import NavBar from "./NavBar"

const Hero = () =>{
    return (
        <>
            <header className="text-white h-screen bg-blue-500 p-2">
                <Container>
                   <div className="flex flex-col justify-between">
                        <NavBar />
                        <main className="grid grid-cols-2 my-28 p-4 max-lg:grid max-lg:grid-cols-1 max-lg:text-center">
                            <div className="flex flex-col gap-4">
                                <H2 text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ex a culpa voluptatibus! Sapiente, libero corrupti delectus quae eveniet incidunt, laudantium explicabo repudiandae consequatur officia ut expedita earum accusantium et." />
                                <div className="max-lg:self-center">
                                    <Button text="sign up" color="text-blue-500" />
                                </div>
                            </div>
                        </main>
                   </div>
                </Container>
            </header>
        </>
    )
}

export default Hero