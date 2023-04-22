import Mainlayout from "../layout/Mainlayout";
import Link from "next/link";

export default function experience() {
    return (
        <div className={"d-flex justify-content-center"}>
            <Mainlayout>
                {/*Binary to decimal*/}
                <div className="card mb-3" style={{maxWidth: "950px"}}>
                    <div className="row g-0">
                        {/*image*/}
                        <div className="col-md-4">
                            <img
                                src="/picture/btd.jpg"
                                className="img-fluid rounded-start"
                                alt="picture for my card"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        {/*detail*/}
                        <div className="col-md-8">
                            <div className="card-body">
                                <Link
                                    href={"https://o365cmu-my.sharepoint.com/:b" +
                                        ":/g/personal/charnchol_pa_cmu_ac_th/EYTwqFhqOdJErPRBrBJHsnABO7" +
                                        "wqrWMRW4WbWRSURnwb9g?e=pyf2Zl"}
                                    className="card-title h5"
                                    target={"_blank"}>
                                    Binary To Decimal (class project)
                                </Link>
                                <p className="card-text">
                                    My project is to design a hardware circuit that converts a 7-bit binary number
                                    to its corresponding decimal value using combination logic. The circuit
                                    includes 7 AND gates, 7 adders, and a 4-bit adder, and displays the final
                                    output on 2 7-segment displays.
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Role: Team Lead & Developer
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*OOP project*/}
                <div className="card mb-3" style={{maxWidth: "950px"}}>
                    <div className="row g-0">
                        {/*detail*/}
                        <div className="col-md-8">
                            <div className="card-body">
                                <Link
                                    href={"https://github.com/ball46/Project_UPBEAT"}
                                    className="card-title h5"
                                    target={"_blank"}>
                                    UPBEAT (class project)
                                </Link>
                                <p className="card-text">
                                    Project from the ”OOP” course.
                                    Not only has OOP detail in this project but also has
                                    ”Grammar & Parser” , MVC , design pattern ,more over
                                    we learned how to design architecture of project.
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Role: Team Lead & Developer
                                    </small>
                                </p>
                            </div>
                        </div>
                        {/*image*/}
                        <div className="col-md-4">
                            <img
                                src="/picture/upbeat.png"
                                className="img-fluid rounded-start"
                                alt="picture for my card"
                                height={"100px"}/>
                        </div>
                    </div>
                </div>

                {/*IR remote*/}
                <div className="card mb-3" style={{maxWidth: "950px"}}>
                    <div className="row g-0">
                        {/*image*/}
                        <div className="col-md-4">
                            <img
                                src="/picture/irremote.png"
                                className="img-fluid rounded-start"
                                alt="picture for my card"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        {/*detail*/}
                        <div className="col-md-8">
                            <div className="card-body">
                                <Link
                                    href={"https://medium.com/@nuttapong6280/tv-stream-deck-control-947e073590f"}
                                    target={"_blank"}
                                    className="card-title h5" >
                                    TV Stream Deck Control (class project)
                                </Link>
                                <p className="card-text">
                                    The project was created to control the operation of the TV in a room with
                                    several TVs and we can control them all from one place. We learned to design
                                    circuits. PCB design and assembling for use.
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Role: Developer & Tester
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Mainlayout>
        </div>
    );
}