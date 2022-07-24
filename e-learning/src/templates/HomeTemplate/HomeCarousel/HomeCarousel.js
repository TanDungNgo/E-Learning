import { Carousel } from "antd";
import "./HomeCarousel.css";
import { SpecialHomeCarousel } from "./SpecialHomeCarousel";

export const HomeCarousel = () => (
  <Carousel autoplay>
    <div>
      <SpecialHomeCarousel />
    </div>
  </Carousel>
);
