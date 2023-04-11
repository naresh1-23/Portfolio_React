import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="text-center text-white bg-dark bg-gradient p-5">
        <h1>Contact Me</h1>
        <span>Gmail: nareshtamang20000@gmail.com</span>
        <br />
        <br />
        <span>
          <a
            href="https://github.com/naresh1-23"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "40px" }}
          >
            <img
              src="assets/github.png"
              alt="Github"
              style={{ height: "50px" }}
            />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/naresh-tamang-0639aa214/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "40px" }}
          >
            <img
              src="assets/linkedin.jpg"
              alt="Github"
              style={{ height: "50px" }}
            />
          </a>
        </span>
      </div>
    </>
  );
};
export default Footer;
