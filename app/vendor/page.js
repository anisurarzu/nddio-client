import React from "react";
import AppleSeries from "@/components/AppleSeries";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const page = () => {
    const features = [
        {
          icon: "/images/icon-1.png",
          title: "Deepak Telecom",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet urna in sem rutrum, sit amet tempor odio consequat.",
          link: "#",
          isVendorPage:true,
          pageTitle:"Vendor",
          pageSubTitle:"Our Great Vendor"
        },
        {
          icon: "/images/icon-2.png",
          title: "A&A Mobile Accessories ",
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum sagittis varius lectus.",
          link: "#",
        },
        {
          icon: "/images/icon-3.png",
          title: "Modcom Green",
          description:
            "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
          link: "#",
        },
        {
          icon: "/images/icon-4.png",
          title: "Movistar Mobile ",
          description:
            "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
          link: "#",
        },
        {
          icon: "/images/icon-5.png",
          title: "  Mobile Legends",
          description:
            "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
          link: "#",
        },
        {
          icon: "/images/icon-6.png",
          title: "Indosat Mobile ",
          description:
            "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
          link: "#",
        },
      ];
  return (
    <main>
     
      <header className="bg-blue-200 p-8  rounded grid grid-cols-2 mx-20">
        <div className="col-span-1">
          <h1 className="text-2xl md:text-4xl font-bold">Vendors</h1>
          <nav className="mt-4">
            <a href="#" className="text-blue-700">
              Home
            </a>{" "}
            / vendor
          </nav>
        </div>

        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          {["Fashion", "Mobiles", "Tabs", "Laptop", "Audio"].map(
            (label, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 1a9 9 0 100 18 9 9 0 000-18zm2.707 10.707a1 1 0 01-1.414 0L10 9.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 8l-1.293-1.293a1 1 0 011.414-1.414L10 6.586l1.293-1.293a1 1 0 011.414 1.414L11.414 8l1.293 1.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-800">{label}</span>
              </button>
            )
          )}
        </div>
      </header>

      <Features features={features} />
     <section className='pt-16 pb-8'>
     <AppleSeries/>
     </section>
      <Footer/>


    </main>
  );
};

export default page;
