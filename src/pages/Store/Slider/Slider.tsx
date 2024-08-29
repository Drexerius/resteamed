import "./Slider.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import Card from "../Card/Card";
import { obj } from "../Store";
import { useEffect, useState } from "react";

import { CSSTransition, SwitchTransition } from "react-transition-group";

type SliderProps = {
  title: string;
  per_page: number;
  objects: obj[];
};

const Slider = ({ title, per_page, objects }: SliderProps) => {
  const [page, setPage] = useState(1);
  const maxPages = Math.ceil(objects.length / per_page);
  const currentObjects = objects.slice(
    (page - 1) * per_page,
    (page - 1) * per_page + per_page
  )

  const handlePrevClick = () => {
    setPage((prevPage) => (prevPage - 1 < 1 ? maxPages : prevPage - 1));
  };

  const handleNextClick = () => {
    setPage((prevPage) => (prevPage + 1 > maxPages ? 1 : prevPage + 1));
  };

  return (
    <>
      <div className="slider-wrap">
        <div className="slider">
          <div className="slider-arrows" onClick={handlePrevClick}>
            <MdArrowBackIos className="arrow-left" />
          </div>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={page}
              classNames="fade"
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
            >
              <div className={ title === "Top Sellers" ? "cards cards-multi" : "cards" }>
                {currentObjects.map((object, i) => {
                  return <Card key={i} title={title} object={object} />;
                })}
              </div>
            </CSSTransition>
          </SwitchTransition>
          <div className="slider-arrows" onClick={handleNextClick}>
            <MdArrowForwardIos className="arrow-right" />
          </div>
        </div>
        <div className="state">
          {[...Array(maxPages)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "current" : ""}
                onClick={() => setPage(i + 1)}
              >
                {page === i + 1 ? (
                  <img
                    src="/src/assets/store/slider-state-current.png"
                    alt="slider_current"
                  />
                ) : (
                  <img
                    src="/src/assets/store/slider-state-empty.png"
                    alt="slider_empty"
                  />
                )}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
