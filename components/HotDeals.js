import React from "react";

export default function HotDeals() {
  return (
    <div>
      <h3 className="font-semibold pb-4 pt-[24px] text-[16px] text-gray-700">
        Hot Deals
      </h3>

      <div className="grid grid-cols-2 gap-4 pt-4">
        <div
          className="grid grid-cols-2 gap-4 rounded-md"
          style={{
            backgroundColor: "#008BFF",
            backgroundImage: `url("/images/Vector-5.png")`,
            backgroundSize: "cover", // optional, to cover the whole div
            backgroundRepeat: "no-repeat", // optional, to prevent repeating the image
            backgroundSize: "636px 288px",
          }}>
          <div className="p-8">
            <small className="py-4 text-[12px] text-white">Best Deals</small>
            <h2 className="text-[33px] font-semibold py-4 text-white leading-relaxed">
              Special Offer <br></br>
              Running Now
            </h2>
            <div className="grid grid-cols-4 mr-16 gap-2">
              <div
                className="py-[5px]  rounded-md text-center"
                style={{ background: "#1781D8", color: "#FFFFFFFC" }}>
                <h4 className="text-white text-[12px]">426</h4>
                <h4 className=" text-[10px]" style={{ color: "#FFFFFF6E" }}>
                  Days
                </h4>
              </div>
              <div
                className="py-[5px] rounded-md text-center"
                style={{ background: "#1781D8", color: "#FFFFFFFC" }}>
                <h4 className="text-white text-[12px]">08</h4>
                <h4 className=" text-[10px]" style={{ color: "#FFFFFF6E" }}>
                  Hours
                </h4>
              </div>
              <div
                className="py-[5px]  rounded-md text-center"
                style={{ background: "#1781D8", color: "#FFFFFFFC" }}>
                <h4 className="text-white text-[12px]">17</h4>
                <h4 className=" text-[10px]" style={{ color: "#FFFFFF6E" }}>
                  Mins
                </h4>
              </div>
              <div
                className="py-[5px]  rounded-md text-center"
                style={{ background: "#1781D8", color: "#FFFFFFFC" }}>
                <h4 className="text-white text-[12px]">58</h4>
                <h4 className=" text-[10px]" style={{ color: "#FFFFFF6E" }}>
                  Sec
                </h4>
              </div>
            </div>

            <div className="flex">
              <div
                className="py-[7px] px-3 text-[13px] mt-[20px] text-white rounded-md border border-white"
                style={{ background: "" }}>
                Shop Now
              </div>
            </div>
          </div>
          <div>
            <img
              className="h-[320px] w-[250px]"
              src="/images/phone-img-2.png"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div
            className="grid grid-cols-2 gap-4 h-[155px] rounded-md px-4"
            style={{
              backgroundColor: "#008BFF",
              backgroundImage: `url("/images/Vector-6.png")`,
              backgroundSize: "336px 108px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom", // Fix background position to bottom
            }}>
            <div>
              <img
                className="w-[90px] h-[170px]"
                src="/images/phone-img-3.png"
              />
            </div>
            <div className="p-4">
              <small className="py-2 text-[11px] text-white">Watches</small>
              <h4 className="text-[16px] font-semibold text-white py-2">
                Best Smart Phones
              </h4>
              <div className="flex">
                <div
                  className="py-[7px] px-3 text-[13px] mt-[3px] text-white rounded-md border border-white"
                  style={{ background: "" }}>
                  Shop Now
                </div>
              </div>
            </div>
          </div>
          <div
            className=" h-[155px] rounded-md "
            style={{
              backgroundColor: "#008BFF",
              backgroundImage: `url("/images/Vector-8.png")`,
              backgroundSize: "313px 154px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top", // Fix background position to bottom
            }}>
            <div className="text-center">
              <h5 className="text-[11px] text-white pt-3 ">Accessories</h5>
              <h4 className="text-[16px] font-semibold text-white py-2">
                Best Sumsing Deal
              </h4>
            </div>
            <div className="flex justify-center">
              <img
                className="w-[80px] h-[80px]  "
                src="/images/phone-img-4.png"
              />
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-4 h-[155px] rounded-md px-4"
            style={{
              backgroundColor: "#008BFF",
              backgroundImage: `url("/images/Vector-7.png")`,
              backgroundSize: "300px 148px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top", // Fix background position to bottom
            }}>
            <div className="p-4">
              <small className="py-3 text-[11px] text-white">LCD / LED</small>
              <h4 className="text-[16px] font-semibold text-white py-2">
                Best Smart Pro MObile
              </h4>
              <div className="flex">
                <div
                  className="py-[7px] px-3 text-[13px] mt-[3px] text-white rounded-md border border-white"
                  style={{ background: "" }}>
                  Shop Now
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-[100px] h-[115px] mt-[24px] ml-4"
                src="/images/phone-img-5.png"
              />
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-4 h-[155px] rounded-md px-4"
            style={{
              backgroundColor: "#008BFF",
              backgroundImage: `url("/images/Vector-10.png")`,
              backgroundSize: "305px 148px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom", // Fix background position to bottom
            }}>
            <div>
              <img
                className="w-[130px] h-[130px] mt-4"
                src="/images/phone-img-1.png"
              />
            </div>
            <div className="p-4">
              <small className="py-3 text-[11px] text-white">Mobiles</small>
              <h4 className="text-[16px] font-semibold text-white py-2">
                Best Mobiles Deals
              </h4>
              <div className="flex">
                <div
                  className="py-[7px] px-3 text-[13px] mt-[3px] text-white rounded-md border border-white"
                  style={{ background: "" }}>
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
