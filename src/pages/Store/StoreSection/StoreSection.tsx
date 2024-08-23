import Slider from '../Slider/Slider';
import './StoreSection.css'

export type obj = {
    image: string
    title: string
    price?: string
    sale?: {
        date?: string
        value?: string
        price?: string
    }
    recent?: {
        status: string
        description: string
    }
    banner?: {
        description: string
        images: string[]
        tags: string[]
    }
    viewers?: string

}
type StoreSectionProps = {
    title: string
    per_page: number
    objects: obj[]
}
const StoreSection = ({title, per_page, objects} : StoreSectionProps) => {
    return (
        <>
            <div className="container">
                <div className="slider-header">
                    <h2>{title}</h2>
                    <button>See more</button>
                </div>
                <Slider title={title} per_page={per_page} objects={objects}/>
            </div>
        </>
    )
}

export default StoreSection