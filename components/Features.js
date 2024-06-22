import React from "react";

const features = [
  {
    icon: "/images/icon-1.png",
    title: "Best Prices & Offers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet urna in sem rutrum, sit amet tempor odio consequat.",
    link: "#",
  },
  {
    icon: "/images/icon-2.png",
    title: "Wide Assortment",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum sagittis varius lectus.",
    link: "#",
  },
  {
    icon: "/images/icon-3.png",
    title: "Free Delivery",
    description:
      "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
    link: "#",
  },
  {
    icon: "/images/icon-4.png",
    title: "Easy Returns",
    description:
      "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
    link: "#",
  },
  {
    icon: "/images/icon-5.png",
    title: "100% Satisfaction",
    description:
      "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
    link: "#",
  },
  {
    icon: "/images/icon-6.png",
    title: "Great Daily Deal",
    description:
      "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
    link: "#",
  },
];

const FeatureComponent = () => {
  return (
    <section className="bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-Features-blue text-blue-400">Features</h2>
          <p className="text-xl mt-2 font-semibold">What we provide</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md p-6"
            >
              <div className="flex justify-center mb-4">
                <img src={feature.icon} alt="Icon" className="h-16 w-16" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-700 mb-4">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;
