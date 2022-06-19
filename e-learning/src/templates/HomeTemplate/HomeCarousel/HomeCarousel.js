import { Carousel } from "antd";

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
      <img
        style={contentStyle}
        src="https://dungmori.com/cdn/course/default/1642045699_61725_b14e1f.png"
        className="w-full"
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://dungmori.com/cdn/course/default/1642045731_49380_44e32f.png"
        className="w-full"
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://dungmori.com/cdn/course/default/1642045699_61725_b14e1f.png"
        className="w-full"
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://dungmori.com/cdn/course/default/1642045731_49380_44e32f.png"
        className="w-full"
      />
    </div>
  </Carousel>
);
