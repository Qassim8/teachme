import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ContactInfo() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="text-center p-5 bg-slate-50 rounded-md border">
        <div className="w-[40px] h-[40px] mx-auto mb-3 flex items-center justify-center bg-slate-100 rounded-md border">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <p className="text-slate-600">support@academy.com</p>
      </div>
      <div className="text-center p-5 bg-slate-50 rounded-md border">
        <div className="w-[40px] h-[40px] mx-auto mb-3 flex items-center justify-center bg-slate-100 rounded-md border">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        <p className="text-slate-600">+20 11111 0000</p>
      </div>
      <div className="text-center p-5 bg-slate-50 rounded-md border">
        <div className="w-[40px] h-[40px] mx-auto mb-3 flex items-center justify-center bg-slate-100 rounded-md border">
          <FontAwesomeIcon icon={faLocationPin} />
        </div>
        <p className="text-slate-600">Anywhere in the world</p>
      </div>
      <div className="text-center p-5 bg-slate-50 rounded-md border">
        <div className="flex justify-center items-center gap-3 mb-3">
          <div className="w-[40px] h-[40px] mx-auto flex items-center justify-center bg-slate-100 rounded-md border">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="w-[40px] h-[40px] mx-auto flex items-center justify-center bg-slate-100 rounded-md border">
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
          <div className="w-[40px] h-[40px] mx-auto flex items-center justify-center bg-slate-100 rounded-md border">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
        <p className="text-slate-600">Socials Profile</p>
      </div>
    </div>
  );
}

export default ContactInfo