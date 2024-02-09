import css from './ImageCard.module.css'
import ImageModal from '../ImageModal/ImageModal';

import { useState } from 'react';

const ImageCard = ({ item }) => {
     const [modalIsOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
    return (
        <div className={css.list}>
            <img className={css.img}
                src={item.urls.small}
                alt={item.description}
                onClick={openModal} />
            <ImageModal modalIsOpen={modalIsOpen}
                urls={item.urls}
                modalClose={closeModal} />
        </div>

    )
}
export default ImageCard