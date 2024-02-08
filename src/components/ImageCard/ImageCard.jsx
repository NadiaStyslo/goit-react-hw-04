import css from './ImageCard.module.css'
import ImageModal from '../ImageModal/ImageModal'

const ImageCard = ({item:{urls, alt_description}}) => {
    return (
        <div>
  <img src={urls.small} alt={alt_description} width="400"/>
</div>

    )
}
export default ImageCard