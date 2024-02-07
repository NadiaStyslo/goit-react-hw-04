import css from './ImageGalery.module.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageGalery = ({items, onClick}) => {
    return (
         <ul>
            {items.map(item => (
       <li key={item.id} className={css.item} onClick={() => onClick(item)}>
                        <ImageCard item={item} />
                    </li>
    ))}
</ul>
     )
}

export default ImageGalery