import React from "react";

const Performance = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-8 items-center">
        {/* Left Side: Images with Background Colors */}
        <div className="col-span-2 flex items-center space-x-4">
          {/* First Image */}
          <div className="bg-blue-500 rounded-lg p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/f29b/db42/5f277d6b254fb3ac876e7470800d1a91?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aupYquFQb4mkweL98JY0H1qJzW6J9flFvqVjqFTGDHasjZNLwdm6WkK3gmKp-Z3fosLWwRop~jw4UTpitcOIDT5gBoreqPVkKZw6xNkqm2389iegYdXdH7GUmhfjvxypEPByEpTXhKQq2t7UuQD9yxfYFTkhe0QvmIziCYXEPqu3HazYpfj2QNPSBD7A~iZvYozxMC15AOJpFf5akJe-UObdp-ach3n3nb1HlDOIMyzF2UCleQb8yEAg-nUZEkdKZaRpRojR-okJW3fpanpn2mZQV474aJ1LPdVRyX~mHz197Af~MGgoN6KexJByDrIsIAE~x--7ggq5xKrg8-jOEA__"
              alt="First Image"
              className="w-48 h-52 object-cover rounded-lg"
            />
          </div>
          {/* Second Image */}
          <div className="bg-sky-800 rounded-lg p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/6ed2/f339/1ce15dbebfc4af5fdb1edd4aacdac630?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G6tD-7iUWEy9ghACDMJh1rGDyVJnFOm6leRVqqqJDcYtPlgdZH5wIFyFtqJ-2Lh8cnGJ1L9wjVUnglkMd5sQe3UYxyvSdNKmtGtuuyV6cBQZvLbEU5XWgYyaSCGZObtol1zOFIHan~9KypUX68~3yhqJTX3XJWG1pdoKAv8WNo1R7NAYc8axxQ1Vm599gKPxA5M9JF05nuJX8AOT4tdFtDfErjMBE-OGdBTMm~Bt~YX8OpW44GBgd1mfbIcu663HdcJ8LskfLcoHBwhcR7ukxhn0xx-u8ipM28KyPss6X3yiWCoyaaA2ER0nLBSKdCOBtydkcFYPjRVzN0b6NrE8PA__"
              alt="Second Image"
              className="w-60 h-72 object-cover rounded-lg"
            />
          </div>
          {/* Third Image */}
          <div className="bg-blue-500 rounded-lg p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/ed18/8cf7/178e411572e176bb656dc9f529ae19c5?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fRDEGQpYPtr-0dxirk-IVnjHmMRkLP-t0t9LBNWa4WUGRzsEl9Uaq31ZVN4ys4Y-q~cUfqYsBywj~TTLhSQwrK~LPGOK88D1D1BcLPf2h5zvjc~Z~SJDOcl4QVdagGacE9LQn46C-QqSj-w7vB4EsqFlfNAuZZQ0VTi17xV48X78Ui1Yx8jD0cwFQOY5lm10bsumcK9kJf~W6KrUuJfuybD8UUkLArlZqkJqbzGFvu70dLVevTE9znVsOUC5ued8n06-nGi5W6-hF3ibrgkUedAyu9YjcrdGRy0VojLwDFgD1-hy4JHIIjhDP0VmUeQ-K7im7YiQ4Ti-SOw6SDLrVw__"
              alt="Third Image"
              className="w-48 h-52 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="col-span-1">
          <div className="ml-8">
            <h2 className="text-3xl font-bold">Our Performance</h2>
            <p className="text-xl font-bold text-gray-700 mt-4">
              Your Partner for e-commerce electronics store.
            </p>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
