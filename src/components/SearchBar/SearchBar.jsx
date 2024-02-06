// import css from './SearchBar.module.css'

const SearchBar = () => {
    const handleSumbit = evt => {
        evt.preventDefault()
        // console.log(evt.target.elements.qeury.value)
        evt.target.reset()
    }
    return (
     <header>
  <form onSubmit = {handleSumbit} >
    <input
                    type="text"
                    name ="qeury"
                    
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