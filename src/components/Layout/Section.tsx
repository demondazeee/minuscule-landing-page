import { Button } from "../UI/Buttons"
import { H2 } from "../UI/Headings"
import Container from "./Container"

const Section = () =>{
    return (
        <>
            <section className="bg-red-400 text-[#FAFAFA] p-10">
                <Container>
                    <main className="flex flex-col items-center text-center p-4 gap-7">
                        <H2 text="Sit ex a culpa voluptatibus! Sapiente," />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ex a culpa voluptatibus! Sapiente, libero corrupti delectus quae eveniet incidunt, laudantium explicabo repudiandae consequatur officia ut expedita earum accusantium et.</p>
                        <Button text='Sign Up for Demo' color="text-red-400"/>
                    </main>
                </Container>
            </section>
        </>
    )
}

export default Section