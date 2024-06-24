import AccessoriesCard from "@/components/AccessoriesCard";
import AppleSeries from "@/components/AppleSeries";
import BrowseCategory from "@/components/BrowseCategory";
import Category from "@/components/Category";
import FeaturesProduct from "@/components/FeaturesProduct";
import Footer from "@/components/Footer";
import HomeSlider from "@/components/HomeSlider";
import HotDeals from "@/components/HotDeals";
import LatestProducts from "@/components/LatestProducts";
import Price from "@/components/Price";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* 1st section */}

      <section className="grid grid-cols-9 gap-4 mx-20 mt-5">
        <div className="col-span-2">
          <Category />
        </div>
        <div className="col-span-7">
          <HomeSlider />
        </div>
      </section>
      {/* 2nd section */}
      <section className="grid grid-cols-9 gap-4 mx-20 mt-12">
        <div className="col-span-2">
          <Price />
        </div>
        <div className="col-span-7 pl-4">
          <div className="grid grid-cols-5">
            <h2 className="text-[21px] font-semibold col-span-1">
              Popular Products
            </h2>
            <div></div>

            <div className="col-span-3 grid grid-cols-7 text-[12px]">
              <p>All</p>
              <p>Mobiles</p>
              <p>Ndiio Fashion</p>
              <p>Tablets</p>
              <p>Accessories</p>
              <p>Electronics</p>
              <p>Computers</p>
            </div>
          </div>
          <div className="">
            <ProductList />
          </div>
        </div>
      </section>
      {/* 3rd section */}
      <section className="mx-20 mt-12">
        <AccessoriesCard />
      </section>

      {/* 4th section */}
      <section className="mx-20">
        <BrowseCategory />
      </section>
      {/* 5th section */}
      <section className="py-4">
        <FeaturesProduct />
      </section>
      {/* 6th section */}
      <section className="mx-20 py-4">
        <HotDeals />
      </section>
      {/* 7th section */}
      <section className="py-4">
        <LatestProducts />
      </section>
      <section className="py-16">
        <AppleSeries />
      </section>
      {/* last section */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
