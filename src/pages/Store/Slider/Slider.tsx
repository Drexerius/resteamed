import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
import slider_state_current from '../../../assets/store/slider-state-current.png'
import slider_state_empty from '../../../assets/store/slider-state-empty.png'

import './Slider.css'
import Card from '../Card/Card'

import { obj } from '../StoreSection/StoreSection'
type SliderProps = {
    title: string
    per_page: number
    objects: obj[]
}

const Slider = ({title, per_page, objects} : SliderProps) => {
    return (
        <>
            <div className="slider-wrap">
                <div className="slider">
                    <div className="slider-arrows">                    
                        <MdArrowBackIos className="arrow-left"/>
                    </div>
                    <div className={title === 'Top Sellers' ? "cards cards-multi" : "cards"}>
                        {
                            objects.map((object) => {
                                return (
                                    <Card title={title} object={object}/>
                                )
                            })
                        }
                    </div>
                    <div className="slider-arrows">
                        <MdArrowForwardIos className="arrow-right"/>
                    </div>
                </div>
                <div className="state">
                    <span><img src={slider_state_current} alt="slider_current" /></span>
                    <span><img src={slider_state_empty} alt="slider_empty" /></span>
                </div>
            </div>
        </>
    )
}

export default Slider;