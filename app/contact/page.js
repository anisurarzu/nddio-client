import React from "react";
import AppleSeries from "@/components/AppleSeries";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main>
      <section className="grid grid-cols-3 gap-24 mx-20 px-2 py-12">
        <div>
          <small  style={{ color: "#008BFF" }}>
            How can help you ?
          </small>
          <h3 className="text-[40px]">Let us know how we can help you</h3>
          <p className="text-gray-600 text-[12px] py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-gray-600 text-[12px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-[12px] py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h4 className="py-4" style={{ color: "#008BFF" }}>
            03. Billing Inquiries
          </h4>
          <p className="text-gray-600 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <h4 className=" pb-4" style={{ color: "#008BFF" }}>
            02. Employer Services
          </h4>
          <p className="text-gray-600 text-[12px] py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h4 className="pt-8">04.General Inquiries</h4>
          <p className="text-gray-600 text-[12px] py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <AppleSeries />
      <Footer />
    </main>
  );
}
