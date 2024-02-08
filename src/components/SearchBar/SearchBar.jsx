// import css from './SearchBar.module.css'
import toast from "react-hot-toast"

const SearchBar = ({onSearch}) => {
    const handleSumbit = evt => {
        evt.preventDefault()
        // console.log(evt.target.elements.query.value)
        if (evt.target.elements.query.value.trim() === "") {
            toast.error('EMPTY STRING!');
            return;
        }
        onSearch(evt.target.elements.query.value)
        evt.target.reset()
    }
    return (
     <header>
  <form onSubmit = {handleSumbit} >
    <input
                    type="text"
                    name ="query"
                    
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>
 )   
}

export default SearchBar