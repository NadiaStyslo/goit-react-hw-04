// import css from './SearchBar.module.css'

const SearchBar = () => {
    const handleSumbit = evt => {
        evt.preventDefault()
    }
    return (
     <header>
  <form onSumbit = {handleSumbit} >
    <input
                    type="text"
                    
    //   autocomplete="off"
    //   autofocus
    //   placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>
 )   
}

export default SearchBar