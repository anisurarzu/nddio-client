import React from "react";

const FeatureComponent = ({features}) => {
  return (
    <section className={`${features?.[0]?.isVendorPage===true?"bg-white py-16":"bg-slate-100 py-16"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-Features-blue text-blue-400">
            {features?.[0]?.pageTitle}
          </h2>
          <p className="text-xl mt-2 font-semibold">{features?.[0]?.pageSubTitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md p-6">
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
                  className="text-blue-600 hover:underline text-sm">
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
