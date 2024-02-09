import css from './ImageGalery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGalery = ({ items }) => {
 
  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {items.map((item) => (
          <li key={item.id} className={css.item}>
            <ImageCard item={item}  />
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default ImageGalery;
