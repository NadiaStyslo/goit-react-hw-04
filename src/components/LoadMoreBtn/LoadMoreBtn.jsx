import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({onClick}) => {
    return (
        <div>
            <button type="button" onClick={onClick}>LoadMore</button>
        </div>
    )
}

export default LoadMoreBtn