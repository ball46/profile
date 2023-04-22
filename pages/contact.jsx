import Mainlayout from "../layout/Mainlayout";
import Link from "next/link";
import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';

export default function contact() {
    return (
        <div className={"d-flex justify-content-center"}>
            <Mainlayout>
                <div className="card text-center" style={{maxWidth: "300px"}}>
                    <img
                        src="/picture/contact.jpg"
                        alt="Charnchol"
                        width={"300"}
                    />
                    <h1>Charnchol</h1>
                    <h1>Panusupanirun</h1>
                    <p className="title">student computer engineering</p>
                    <p>Chiang Mai University</p>
                    <div style={{margin: "12px"}} className={"fa-2x"}>
                        <Link
                            href="https://github.com/ball46"
                            style={{ margin: '10px' }}
                            target={"_blank"}
                        >
                            <i className="fa fa-github"/>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/charnchol-panusupanirun-18a6b5271/"
                            style={{ margin: '10px' }}
                            target={"_blank"}
                        >
                            <i className="fa fa-linkedin"/>
                        </Link>
                        <Link
                            href="https://www.facebook.com/ball.panu.9/"
                            style={{ margin: '10px' }}
                            target={"_blank"}
                        >
                            <i className="fa fa-facebook"/>
                        </Link>
                    </div>
                    <p>
                        <button>
                            Contact
                        </button>
                    </p>
                </div>
            </Mainlayout>
        </div>
    );
}