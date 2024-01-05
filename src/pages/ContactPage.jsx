import React from "react";
import { MapPinIcon } from "../components/icons/MapPinIcon";
import { PhoneIcon } from "../components/icons/PhoneIcon";
import { EnvelopeIcon } from "../components/icons/EnvelopeIcon";
import XMapCatalog from "../components/catalogs/XMapCatalog";

const contactInfo = [
  {
    icon: <MapPinIcon className="w-5 h-5" />,
    title: "Address",
    details:
      "Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US",
  },
  {
    icon: <PhoneIcon className="w-5 h-5" />,
    title: "Lets Talk",
    details: "+1 800 1236879",
  },
  {
    icon: <EnvelopeIcon className="w-5 h-5" />,
    title: "Sale Support",
    details: "contact@example.com",
  },
];

const ContactPage = () => {
  return (
    <div>
      <div className="h-10" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border p-[20px] lg:pt-[55px] lg:px-[70px] lg:pb-[70px] flex flex-col items-center gap-8">
          <p className="text-2xl">Send Us A Message</p>
          <input
            name="email"
            type="email"
            placeholder="Your Email Address"
            className="w-full rounded-md input input-bordered"
          />
          <textarea
            className="w-full rounded-md textarea textarea-bordered"
            rows={5}
            placeholder="How Can We Help?"
          />
          <button className="px-8 border-none rounded-full w-full btn bg-[#222] hover:bg-[#717fe0] text-white">
            SUBMIT
          </button>
        </div>
        <div className="border p-[20px] lg:pt-[55px] lg:px-[70px] lg:pb-[70px] flex items-center">
          <table>
            <tbody>
              {contactInfo.map((info, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="w-[40px] h-14">{info.icon}</td>
                    <td>
                      <p className="text-lg">{info.title}</p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="pb-4 w-[240px]">
                      <p
                        className={`text-sm ${
                          index === 0 ? "text-gray-400" : "text-[#717fe0]"
                        }`}
                      >
                        {info.details}
                      </p>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-20" />
      <XMapCatalog />
    </div>
  );
};

export default ContactPage;
