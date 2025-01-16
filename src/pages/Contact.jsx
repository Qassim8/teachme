import React, { Fragment } from 'react'
import AltTitle from '../components/AltTitle'
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

function Contact() {
  return (
    <Fragment>
      <AltTitle
        title="Contact Us"
        desc="Welcome to our platform, Let's contact to each other where we are passionate about empowering individuals to master the world of design and development. 
        We offer a wide range of online"
      />
      <section className='my-16 bg-white rounded-md flex flex-col md:flex-row gap-10'>
        <ContactForm />
        <ContactInfo/>
      </section>
    </Fragment>
  );
}

export default Contact