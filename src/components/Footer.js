import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyle = {
    display: "inline-block",
    marginRight: "10px",
    width: "45px",
    height: "45px",
  };

  const iconStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <footer style={footerStyle}>
      <nav style={navStyle}>
        <ul>
          <li style={linkStyle}>
            <a href="https://www.linkedin.com/in/carlos-martinez-baltazar/">
              <img
                src="./assests/images/icons/linkdin_icon.png"
                alt="linkdin icon"
                style={iconStyle}
              />
            </a>
          </li>
          <li style={linkStyle}>
            <a href="https://github.com/carlosmb001">
              <img
                src="./assests/images/icons/github_icon.png"
                alt="github icon"
                style={iconStyle}
              />
            </a>
          </li>
          <li style={linkStyle}>
            <a href="intagram.com">
              <img
                src="./assests/images/icons/insta_icon.png"
                alt="instagram icon"
                style={iconStyle}
              />
            </a>
          </li>
          <li style={linkStyle}>
            <a href="twitter.com">
              <img
                src="./assests/images/icons/twitter_icon.png"
                alt="twitter icon"
                style={iconStyle}
              />
            </a>
          </li>
          <li style={linkStyle}>
            <a href="./assests/images/Final Resume Carlos Baltazar.pdf">
              <img
                src="./assests/images/icons/resume_icon.png"
                alt="resume icon"
                style={iconStyle}
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;