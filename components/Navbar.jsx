import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div
        className="d-flex justify-content-center gap-5 fw-bold my-4 "
        style={{ color: "tan" }}
      >
        <div className="test">1</div>
        <div className="test2">2</div>

        {/* <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/exp">
          <a>Experience</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/lab-07">
          <a>Lab-07</a>
        </Link> */}
      </div>
    </div>
  );
}
