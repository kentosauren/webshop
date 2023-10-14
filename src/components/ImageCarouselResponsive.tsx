import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface ImageCarouselResponsiveProps {
  image_urls: string[] | null;
}

class ImageCarouselResponsive extends Component<ImageCarouselResponsiveProps> {
  render() {
    const { image_urls } = this.props;
    if (!image_urls || image_urls.length === 0) {
      return <div>Loading...</div>; // Or any other placeholder
    }

    return (
      <div style={{ margin: "auto", width: "500px" }}>
        <Carousel width="100%" infiniteLoop={true}>
          {image_urls.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Image ${index + 1}`} />
              <p className="legend">{`Legend ${index + 1}`}</p>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default ImageCarouselResponsive;
