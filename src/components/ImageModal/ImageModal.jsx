import css from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '500px',
    width: '1000px',
  },
};
const ImageModal = ({ urls, description, modalIsOpen, modalClose }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={modalClose}
      styles={customStyles}
    >
      <div>
        <img src={urls.regular} alt={description} width={500} />
      </div>
    </Modal>
  );
};

export default ImageModal;
