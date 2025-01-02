import React from "react";
import {
  HiOutlineOfficeBuilding,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

const contactData = {
  address: {
    title: "Official Address",
    lines: [
      "College of Engineering Guindy,",
      "Anna University,",
      "Chennai - 600 025,",
      "Tamil Nadu,",
      "India.",
    ],
  },
  phones: {
    title: "Contact Number",
    numbers: ["+91 (044) 2235 8830"],
  },
  emails: {
    title: "Email Address",
    addresses: ["vetri@annauniv.edu"],
  },
};

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-base-200 py-20">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Left Column */}
          <div className="md:w-1/4 flex flex-col md:items-start mb-8 ml-5 md:mb-0 lg:ml-32">
            <h1 className="text-5xl font-medium mb-4">Contact</h1>
            <p className="text-xl font-medium leading-relaxed text-base-content/80 ml-1 md:ml-0">
              Get in touch with me
            </p>
          </div>

          {/* Right Column - Contact Information */}
          <div className="md:w-3/4">
            <div className="space-y-8">
              <div className="card bg-base-100 shadow-md p-8 lg:mx-20">
                {/* Address Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <HiOutlineOfficeBuilding className="w-6 h-6" />
                    <h2 className="text-2xl font-medium">
                      {contactData.address.title}
                    </h2>
                  </div>
                  <div className="border-l-4 border-gray-200 pl-6">
                    {contactData.address.lines.map((line, index) => (
                      <p key={index} className="text-lg leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Phone Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <HiOutlinePhone className="w-6 h-6" />
                    <h2 className="text-2xl font-medium">
                      {contactData.phones.title}
                    </h2>
                  </div>
                  <div className="border-l-4 border-gray-200 pl-6">
                    {contactData.phones.numbers.map((number, index) => (
                      <p key={index} className="text-lg leading-relaxed">
                        <a
                          href={`tel:${number.replace(/\D/g, "")}`}
                          className="hover:text-primary transition-colors"
                        >
                          {number}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Email Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <HiOutlineMail className="w-6 h-6" />
                    <h2 className="text-2xl font-medium">
                      {contactData.emails.title}
                    </h2>
                  </div>
                  <div className="border-l-4 border-gray-200 pl-6">
                    {contactData.emails.addresses.map((email, index) => (
                      <p key={index} className="text-lg leading-relaxed">
                        <a
                          href={`mailto:${email}`}
                          className="hover:text-primary transition-colors"
                        >
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
