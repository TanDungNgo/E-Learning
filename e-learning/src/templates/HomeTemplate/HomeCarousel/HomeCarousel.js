import { Carousel } from "antd";
import "./HomeCarousel.css";
import { SpecialHomeCarousel } from "./SpecialHomeCarousel";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const HomeCarousel = () => (
  <Carousel autoplay>
    <div>
      <SpecialHomeCarousel />
    </div>
    <div>
      <SpecialHomeCarousel />
    </div>
    <div>
      <SpecialHomeCarousel />
    </div>
  </Carousel>
);
