import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class ImageCarouselResponsive extends Component {
  render() {
    return (
      <div style={{ margin: "auto", width: "500px" }}>
        <Carousel width="100%" infiniteLoop={true}>
          <div>
            <img src="src/assets/img/1.jpg" alt="Image 1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="src/assets/img/2.jpg" alt="Image 2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="src/assets/img/3.jpg" alt="Image 3" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="src/assets/img/4.jpg" alt="Image 3" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="src/assets/img/5.jpg" alt="Image 3" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default ImageCarouselResponsive;
