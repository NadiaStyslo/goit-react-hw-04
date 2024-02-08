import css from './Loader.module.css'
import {FallingLines} from 'react-loader-spinner'
const Loadear = () => {
    return (
         <FallingLines
  color="#ed4b4b"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />)
     
}

export default Loadear