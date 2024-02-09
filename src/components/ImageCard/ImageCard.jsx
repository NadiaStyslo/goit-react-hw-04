import css from './ImageCard.module.css'



const ImageCard = ({item:{urls, description}}) => {
    return (
        <div className={css.list}>
            <img className={css.img} src={urls.small} alt={description} />
</div>

    )
}
export default ImageCard