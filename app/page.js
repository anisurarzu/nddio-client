import Category from "@/components/Category";
import HomeSlider from "@/components/HomeSlider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* 1st section */}

      <section className="grid grid-cols-12 gap-4 mx-28 mt-8">
        <div className="col-span-3">
          <Category />
        </div>
        <div className="col-span-9">
          <HomeSlider />
        </div>
      </section>
    </main>
  );
}
