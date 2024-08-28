import "./StoreSection.css";
import Slider from "../Slider/Slider";
import { obj } from "../Store";

type StoreSectionProps = {
  title: string;
  per_page: number;
  objects: obj[];
};

const StoreSection = ({ title, per_page, objects }: StoreSectionProps) => {
  return (
    <>
      <div className="container">
        <div className="slider-header">
          <h2>{title}</h2>
          <button>See more</button>
        </div>
        <Slider title={title} per_page={per_page} objects={objects} />
      </div>
    </>
  );
};

export default StoreSection;
