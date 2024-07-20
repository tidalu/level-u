

import Categories from "@/components/categories";
import YesMove from "@/components/yes-move";
import LandingBanner from "@/components/landing-banner";
import Offer from "@/components/offer";
import PopulaActivities from "@/components/popula-activities";

const LandingPage = () => {


  return (
    <div className="h-full max-w-[1900px] max-w-sc mx-auto">

      {/* landing banner */}
      <LandingBanner />

      {/* offer */}
      <Offer />

      {/* available clubs */}
      <section>
        <div className="my-16 px-3 lg:px-16 mx-auto">
          <h2 className=" text-black dark:text-white font-bold text-2xl 2xl:text-3xl text-center">Classes available in our clubs</h2>
          <p className=" text-[12px] 2xl:text-lg text-center text-gray-500  mt-4">Choose your favorite activities and learn more</p>

          <Categories />
        </div>
      </section>

      {/* popular activities */}
      <PopulaActivities />

      {/* yes2move */}
      <YesMove />
    </div>
  );
}

export default LandingPage;