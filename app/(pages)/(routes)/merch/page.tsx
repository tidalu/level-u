import MerchStore from "@/components/merch-store";
import UnderConstructionWrapper from "@/components/under-construction-wrapper";

function Merch() {
  return (
    <UnderConstructionWrapper>
      <div className=" relative  mx-auto px-3 pt-36 mb-16  max-w-screen-lg">
        <MerchStore />
      </div>
    </UnderConstructionWrapper>
  );
}

export default Merch;
