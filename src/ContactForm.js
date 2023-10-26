import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { toast } from 'react-toastify';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
background: linear-gradient(225deg, hsla(330, 60%, 80%, 1) 0%, hsla(270, 60%, 80%, 1) 100%);
background: -moz-linear-gradient(225deg, hsla(330, 60%, 80%, 1) 0%, hsla(270, 60%, 80%, 1) 100%);
background: -webkit-linear-gradient(225deg, hsla(330, 60%, 80%, 1) 0%, hsla(270, 60%, 80%, 1) 100%);
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}

`


const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 13450px;

padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
        padding-left: 23px; 
        padding-right: 23px
    }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: #f2e6f9;

  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 6px 24px;
  margin-top: 20px;
  gap: 12px;
`;



const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 2px solid #b19db7;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 2px solid #854CE6;
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 2px solid #b19db7;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  resize: none;
  padding: 12px 16px;
  &:focus {
    border: 2px solid #854CE6;
  }
`
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(225deg, hsla(330, 100%, 50%, 1) 0%, hsla(270, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(225deg, hsla(330, 100%, 60%, 1) 0%, hsla(270, 100%, 60%, 1) 100%);
    transform: scale(1.05);
  }
`;




const Contact = () => {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const form = useRef();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = form.current['from_name'].value;
    const userEmail = form.current['from_email'].value;
    const userPhone = form.current['from_phone'].value;
    const message = form.current['message'].value;

    if (!userName || !userEmail || !userPhone || !message) {
      setErrorMessage('Please fill in all the required fields.');
      setOpen(true);
      return;
    }

    emailjs.sendForm("service_bdt9rbd", "template_nywsa2m", form.current, "edd6V1JsJWJuMC-dN")
      .then((result) => {
        setSuccessMessage('🎉 Thank you for reaching out! I will get back to you soon. 🚀');

        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container id="contact">
      <Wrapper>
      
  <img
    src="https://firebasestorage.googleapis.com/v0/b/portfolioimages-fdfbd.appspot.com/o/logos%2Fremoved.png?alt=media&token=94c019fc-96ac-41f3-a47e-5ab073273e19"
    alt="Your Alt Text"
    style={{ marginTop:'15px',width: '50px', height: '50px' }}
  />
 
    <h1>Connect with Naveen!</h1>
    



    
        <Desc>Feel free to reach out to Me for any questions or opportunities!</Desc>
        <Desc>I will get back to you as soon as possible.</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Drop a Message 💬</ContactTitle>
          
          <ContactInput 
            placeholder="Name" 
            name="from_name" 
            required
            errorMessage="Please fill out this field."
          />
          <ContactInput 
            placeholder="Email" 
            name="from_email" 
            type="email"
            required
            errorMessage="Please fill out this field."
          />
          <ContactInput 
            placeholder="Phone Number" 
            name="from_phone" 
            type="tel"
          />
          <ContactInputMessage 
            placeholder="Message" 
            rows="4" 
            name="message" 
            required
            errorMessage="Please fill out this field."
          />
          <ContactButton type="submit" value="Send Message" />
          <div style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
            <p>Please fill out all the required fields (Name, Email, Message).</p>
            <p>Phone number is optional.</p>
          </div>
        </ContactForm>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }}>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={successMessage ? successMessage : errorMessage}
            severity={successMessage ? "success" : "error"}
          />
        </div>
      </Wrapper>
    </Container>
  );
  
  
  
}

export default Contact;



