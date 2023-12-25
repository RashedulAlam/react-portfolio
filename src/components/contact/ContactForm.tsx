import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-screen-md mx-auto basis-1/2">
      <form className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="contact-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="contact-first-name"
              type="text"
              placeholder="Jon"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="contact-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="contact-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="contact-email"
            >
              Email Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="contact-email"
              type="email"
              placeholder="********@*****.**"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="contact-message"
            >
              Your Message
            </label>
            <textarea
              id="contact-message"
              rows={10}
              placeholder="Enter your message"
              className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></textarea>
          </div>
          <div className="flex w-full px-3 justify-start mt-6">
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
