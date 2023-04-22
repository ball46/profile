import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div>
            <div
                className="d-flex justify-content-center gap-5 fw-bold my-4"
                style={{color: "tan"}}
            >
                <Link href="/">
                    Home
                </Link>
                <Link href="/experience">
                    Experience
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
}
