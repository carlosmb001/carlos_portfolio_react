import React from 'react';

function Contact() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <section style={{ backgroundColor: '#f2f2f2', borderRadius: '10px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact me</h3>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ marginBottom: '10px' }}>
                        Company Name:
                        <br />
                        <input type="text" style={{ padding: '5px', borderRadius: '5px', border: 'none', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }} />
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        Email:
                        <br />
                        <input type="text" style={{ padding: '5px', borderRadius: '5px', border: 'none', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }} />
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        What can we work on:
                        <br />
                        <input type="text" style={{ padding: '5px', borderRadius: '5px', border: 'none', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }} />
                    </p>
                    <button type="submit" style={{ marginTop: '10px', padding: '5px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}>Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Contact;