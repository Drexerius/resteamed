import './GenreCard.css'

type CardProps = {
    image: string
    genre: string
}
const Card = ({ image, genre } : CardProps) => {
    return (
        <>
            <div className="genre-card">
                <img src={image} alt="genre-image" />
                <h2>{genre}</h2>
            </div>
        </>
    )
}

export default Card