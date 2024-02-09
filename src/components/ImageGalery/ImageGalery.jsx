import css from './ImageGalery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import ImageModal from '../ImageModal/ImageModal';
import { useState } from 'react';
const ImageGalery = ({ items }) => {
  const [modalIsOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {items.map((item) => (
          <li key={item.id} className={css.item}>
            <ImageCard item={item} onClick={openModal} />
          </li>
        ))}
      </ul>
      <ImageModal isOpen={modalIsOpen} image={items} onRequestClose={closeModal} />
    </div>
  );
};

export default ImageGalery;
