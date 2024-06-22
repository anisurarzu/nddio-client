import React from "react";

const AppleSeries = () => {
  return (
    <section className="p-10">
      <div className="bg-sky-100 rounded-lg py-12 px-6 md:px-16 lg:px-24 xl:px-32 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800">
              Apple iPhone Series
            </h2>
            <p className="text-2xl text-gray-600 mt-4">Some 2xl text</p>
            <p className="text-4xl font-bold text-gray-700 mt-2">
              Starting from $190
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-6">
              Shop Now
            </button>
          </div>

          {/* Right Side: Image with Overlay */}
          <div className="md:w-1/2 relative overflow-hidden">
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-sky-100 opacity-80"></div>
            {/* Image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/bf90/a2bc/af96854e758274791e656a49416e75d6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GR9BzZuHg-jlwhw~ZtRqIa2t1TOzPGqdIscGqBuj4bXN1WeiFRugY0wmBh10~hN1vMzkOFuVefFRgNw8FFF1deivGnfAwOU3wxN2ZVpS1ISkf3~HPx5ZoHNHbtSmuiNY94dzhKDEPWZlOc14cgVfl1gImd289r3SkIgiQDEDEXDE~l1oLdlv1oDgcNa2dAPwSWZXAEorT2QHz1hOUKxqIcpWQ5O0PRKZnZkXZq3YRA4UfDmoaKhqCuiOhL0qIMp0DVvkGjAH17YpdeDgkT~u683lGUXjkBssN8xlCJ7qVRdyCDwqbV2J46kYBbkQCuLRNNu0DM9cPWGTw1Dx6bRQqQ__"
              alt="Apple Series"
              className="absolute bottom-0 right-0 w-2/3 h-auto transform translate-x-6 translate-y-6 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleSeries;
