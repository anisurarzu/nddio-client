import React from "react";

export default function ProductDetails({ detail }) {
  console.log("----", detail?.[0]?.brandd);
  return (
    <div className='p-2'>
        <img src={detail?.[0]?.product_image?.[0]?.product_image}/>
      <h3 className='textl font-semibold'>{detail?.[0]?.brandd?.name}</h3>
      <p className='py-2'>{detail?.[0]?.brandd?.description}</p>
    </div>
  );
}
