import ContactForm from "@/components/contact/ContactForm";
import React from "react";
import Location, { ILocationProps } from "@/components/profile/Location";
import { HERO_SUMMARY } from "@/config/hero";

const ContactPage = () => {
  const locationProps: ILocationProps = {
    heroEmail: HERO_SUMMARY.email,
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
          Get In Touch
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-20">
        <ContactForm />
        <Location {...locationProps} />
      </div>
    </main>
  );
};

export default ContactPage;
