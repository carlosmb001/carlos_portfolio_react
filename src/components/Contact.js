import React from 'react';

function Contact(){
    return (
        <div>
            <section id="contact-me" className="contact-me">
                <h3>Contact me</h3>
                <form>
                    <p>
                        Company Name:
                        <br />
                        <input type="text" />
                    </p>
                    <p>
                        Email:
                        <br />
                        <input type="text" />
                    </p>
                    <p>
                        What can we work on:
                        <br />
                        <input type="text" />
                    </p>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Contact;
