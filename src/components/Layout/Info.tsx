import {Button} from "../UI/Buttons"
import {H2} from "../UI/Headings"
import Card from "./Card"
import Container from "./Container"

const Info = () => {
    return (
        <>
            <section className="bg-[#FAFAFA] text-[#444] p-10">
                <Container>
                    <main className="flex flex-col items-center text-center p-4 gap-7">
                        <H2 text="Sit ex a culpa voluptatibus! Sapiente,"/>
                        <ul className="flex gap-4 flex-wrap">
                            <li className="flex-1 min-w-[230px]">
                                <Card>
                                    <div className="flex flex-col gap-4">
                                        <H2 text="Test"/>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste est incidunt beatae ut impedit nesciunt quis rem, nemo voluptate ad minus quo molestiae itaque, deserunt, veniam qui recusandae eum?</p>
                                    </div>
                                </Card>
                            </li>
                            <li className="flex-1 min-w-[230px]">
                                <Card>
                                    <div className="flex flex-col gap-4">
                                        <H2 text="Test"/>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste est incidunt beatae ut impedit nesciunt quis rem, nemo voluptate ad minus quo molestiae itaque, deserunt, veniam qui recusandae eum?</p>
                                    </div>
                                </Card>
                            </li>
                            <li className="flex-1 min-w-[230px]">
                                <Card>
                                    <div className="flex flex-col gap-4">
                                        <H2 text="Test"/>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste est incidunt beatae ut impedit nesciunt quis rem, nemo voluptate ad minus quo molestiae itaque, deserunt, veniam qui recusandae eum?</p>
                                    </div>
                                </Card>
                            </li>
                            <li className="flex-1 min-w-[230px]">
                                <Card>
                                    <div className="flex flex-col gap-4">
                                        <H2 text="Test"/>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste est incidunt beatae ut impedit nesciunt quis rem, nemo voluptate ad minus quo molestiae itaque, deserunt, veniam qui recusandae eum?</p>
                                    </div>
                                </Card>
                            </li>
                        </ul>
                    </main>

                </Container>
            </section>
        </>
    )
}

export default Info
