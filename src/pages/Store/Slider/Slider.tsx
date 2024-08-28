import "./Slider.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import Card from "../Card/Card";
import { obj } from "../Store";

type SliderProps = {
  title: string;
  per_page: number;
  objects: obj[];
};

const Slider = ({ title, per_page, objects }: SliderProps) => {
  return (
    <>
      <div className="slider-wrap">
        <div className="slider">
          <div className="slider-arrows">
            <MdArrowBackIos className="arrow-left" />
          </div>
          <div
            className={title === "Top Sellers" ? "cards cards-multi" : "cards"}
          >
            {objects.map((object, i) => {
              return <Card key={i} title={title} object={object} />;
            })}
          </div>
          <div className="slider-arrows">
            <MdArrowForwardIos className="arrow-right" />
          </div>
        </div>
        <div className="state">
          <span>
            <img
              src="/src/assets/store/slider-state-current.png"
              alt="slider_current"
            />
          </span>
          <span>
            <img
              src="/src/assets/store/slider-state-empty.png"
              alt="slider_empty"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Slider;
