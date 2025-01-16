import React from "react";

function ContactForm() {
  return (
    <form className="flex-1 flex flex-col gap-5 p-10 border-b md:border-b-0 md:border-r">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex-1">
          <label htmlFor="firstname" className="font-semibold pb-2 block">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            className="p-3 bg-slate-50 border border-slate-200 outline-none rounded-md w-full"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastname" className="font-semibold pb-2 block">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            className="p-3 bg-slate-50 border border-slate-200 outline-none rounded-md w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex-1">
          <label htmlFor="email" className="font-semibold pb-2 block">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter email"
            className="p-3 bg-slate-50 border border-slate-200 outline-none rounded-md w-full"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="phone" className="font-semibold pb-2 block">
            Phone
          </label>
          <input
            type="text"
            placeholder="Enter phone"
            className="p-3 bg-slate-50 border border-slate-200 outline-none rounded-md w-full"
          />
        </div>
      </div>
      <div className="flex-1">
        <label htmlFor="subject" className="font-semibold pb-2 block">
          Subject
        </label>
        <input
          type="text"
          placeholder="Enter subject"
          className="p-3 bg-slate-50 border border-slate-200 outline-none rounded-md w-full"
        />
      </div>
      <div className="flex-1">
        <label htmlFor="message" className="font-semibold pb-2 block">
          Message
        </label>
        <textarea
          placeholder="Enter your message here..."
          className=" resize-none p-3 h-[200px] bg-slate-50 border border-slate-200 outline-none rounded-md w-full"
        ></textarea>
      </div>
      <button className="w-[200px] mx-auto py-1 md:py-3 px-3 md:px-5 text-[13px] md:text-[16px] text-white bg-amber-500 rounded-md cursor-pointer outline-none">
        Send Your Message
      </button>
    </form>
  );
}

export default ContactForm;
