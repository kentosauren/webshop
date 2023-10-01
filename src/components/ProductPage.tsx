import ItemCard from "./ItemCard";

import ImageCarouselResponsive from "./ImageCarouselResponsive";
import LoremIpsum from "./LoremIpsum";
function ProductPage() {
  return (
    <div className="mainContent">
      {/* <div className="responsive-layout"> */}
      <ImageCarouselResponsive />
      <ItemCard />
      {/* </div> */}

      <LoremIpsum />
      <img
        src="./src/assets/img/3.jpg"
        style={{
          width: "500px",
          left: "auto",
          right: "auto",
        }}
      />
      <LoremIpsum />
    </div>
  );
}

export default ProductPage;
