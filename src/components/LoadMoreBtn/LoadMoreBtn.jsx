import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.load}>
      <button type="button" className={css.btn} onClick={onClick}>
        LoadMore
      </button>
    </div>
  );
};

export default LoadMoreBtn;
