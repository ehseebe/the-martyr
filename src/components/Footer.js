import React from "react";
import "../scss/main.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a
        href="https://vimeo.com/anacolutha"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        © Anacolutha {currentYear ? currentYear : "2021"}. {" "}
      </a>
       All rights reserved.{" "}
    </footer>
  );
}
