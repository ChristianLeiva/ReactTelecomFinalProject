import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3 d-flex justify-content-around"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: Christiain Leiva

          <a
            href="https://github.com/ChristianLeiva"
            target={"_blank"}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bolder",
            }}
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/christian-nicolas-leiva"
            target={"_blank"}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bolder",
            }}
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
    </footer>
  );
};
