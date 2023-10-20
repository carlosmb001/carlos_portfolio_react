import React from 'react';

function Header(props) {
  const headerStyle = {
    backgroundColor: '#33673B',
    color: '#fff',
    padding: '20px',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '36px',
    margin: '0',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '18px',
  };

  const HeaderLinks = props.links
    ? props.links.map((link) => (
        <li key={link.id}>
          <a href={link.href} style={linkStyle}>
            {link.text}
          </a>
        </li>
      ))
    : null;

  return (
    <header style={headerStyle}>
      <section className="header" style={sectionStyle}>
        <h1 style={titleStyle}>Carlos Martinez</h1>
        <nav style={navStyle}>
          <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
            <li>
              <a href="#about-me" style={linkStyle}>
                About me
              </a>
            </li>
            <li>
              <a href="#projects" style={linkStyle}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact-me" style={linkStyle}>
                Contact me
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1HJHc-2zYo4-cZbYR4jDsbYniDaA60wC4/view?usp=share_link"
                style={linkStyle}
              >
                Resume
              </a>
            </li>
            {HeaderLinks}
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;