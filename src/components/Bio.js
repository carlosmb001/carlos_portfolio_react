import React from 'react';
import image from '../images/projects/carlos.jpg';

function Bio() {
  const sectionStyle = {
    padding: '50px 0',
    backgroundColor: '#f8f9fa',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
  };

  return (
    <section id="about-me" className="about-me" style={sectionStyle}>
      {/* <img src={image} alt="Carlos Martinez Baltazar" /> */}
      <div className="container" style={containerStyle}>
        <h2 style={titleStyle}>About Me</h2>
        <p style={textStyle}>
          Welcome to my Full Stack Development portfolio page! My name is Carlos
          Martinez Baltazar, and I am originally from Mexico but currently
          living in San Francisco. I am a Full Stack Engineer who is passionate
          about crafting beautiful and functional web applications. Currently
          I'm attending the Full Stack Engineer program at UC Berkeley, where I
          am honing my skills and learning the latest technologies in web
          development. Please feel free to browse my projects and learn more
          about my expertise in front-end and back-end development, database
          management, and user experience design. I am excited to share my work
          with you and discuss how I can contribute to your next project.
        </p>
      </div>
    </section>
  );
}

export default Bio;