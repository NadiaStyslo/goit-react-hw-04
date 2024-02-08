import css from './ImageModal.module.css'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "500px",
    width: "1000px",
  },
};
const ImageModal = ({ src, alt, modalIsOpen, modalClose }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={modalClose}
            styles={customStyles}>
            <img 
                src={src}   
                alt={alt} />
            </Modal>
    )
}

export default ImageModal