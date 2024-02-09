import css from './Loader.module.css';
import { FallingLines } from 'react-loader-spinner';
const Loadear = () => {
  return (
    <div className={css.loader}>
      <FallingLines
        color="#ed4b4b"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

export default Loadear;
