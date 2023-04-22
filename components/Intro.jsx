import React from "react";

export default function Intro() {
    return (
        <div className="mx-auto" style={{maxWidth: "850px"}}>
            <div className="d-flex justify-content-center gap-3">
                <div>
                    <img
                        src="/picture/myface.jpg"
                        alt="A picture of me"
                        className="rounded-circle"
                        width="200"
                        height="200"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className={"my-4"}>
                    <p className="display-5 mb-3 ">I'm programmer</p>
                    <p className="display-5 mb-3 ">Charnchol Panusupanirun (Ball)</p>
                </div>
            </div>
            <div className={"my-4"}>
                <p className="text-muted">
                    Hello, my name is Charnchol Panusupanirun and I am currently studying computer engineering at
                    Chiang Mai University. I have always been passionate about technology and fascinated by its
                    potential
                    to transform the world around us.
                </p>
                <p className="text-muted">
                    As a dedicated and hardworking student, I am always eager to learn and apply new concepts
                    to solve complex problems. While I am still in the process of completing my academic studies,
                    I am actively seeking opportunities to gain practical work experience in the field of computer
                    engineering. I am looking for opportunities to work with dynamic and innovative teams
                    where I can contribute my skills and knowledge, while also learning from experienced professionals.
                </p>
                <p className="text-muted">
                    If you have any questions or would like to know more about my background and qualifications,
                    please feel free to contact me.
                </p>
            </div>
        </div>
    );
}
