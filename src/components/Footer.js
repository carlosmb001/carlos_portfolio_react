import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

function Footer() {
  const footerStyle = {
    backgroundColor: "#33673B",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    left: "0",
    bottom: "0",
    width: "100%",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyle = {
    display: "inline-block",
    marginRight: "10px",
    width: "40px",
    height: "40px",
  };

  const iconStyle = {
    width: "100%",
    height: "100%",
    color: "#fff",
  };
  const divStyle = {
    bottom: "10px",
    width: "100%",
    color: "#fff",
    fontSize: "10px",
    opacity: "0.5",
  };

  return (
    <footer style={footerStyle}>
      <nav style={navStyle}>
        <ul>
          <li style={linkStyle}>
            <a href="https://www.linkedin.com/in/carlos-martinez-baltazar/">
              <LinkedInIcon style={iconStyle}/>
            </a>
          </li>
          <li style={linkStyle}>
            <a href="https://github.com/carlosmb001">
              <GitHubIcon style={iconStyle}/>
            </a>
          </li>
          <li style={linkStyle}>
            <a href="intagram.com">
            <InstagramIcon style={iconStyle}/>
            </a>
          </li>
          <li style={linkStyle}>
            <a href="twitter.com">
              <TwitterIcon style={iconStyle}/>
            </a>
          </li>
          <li style={linkStyle}>
            <a href="./assests/images/Final Resume Carlos Baltazar.pdf">
              <ArticleIcon style={iconStyle}/>
            </a>
          </li>
        </ul>
      </nav>
      <div style={divStyle}>
        ©Copyright 2023 Carlos Martinez Baltazar
      </div> 
    </footer>
  );
}

export default Footer;