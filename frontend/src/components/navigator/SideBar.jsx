import floor from '../../assets/images/floor.jpg'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside className='flex '>
    <p className='p-5'>

        <Link to={'./'}> 
        <p className=''>Ground Floor</p>
        <img src={floor} height={100} width={100}></img>
        </Link>
        
    </p>

    <p className='p-5'>

        <Link to={'firstfloor'}> 
        <p className=''>1st Floor</p>
        <img src={floor} height={100} width={100}></img>
        </Link>

    </p>

    <p className='p-5'>

    <Link to={'secondfloor'}> 
        <p className=''>2nd Floor</p>
        <img src={floor} height={100} width={100}></img>
        </Link>

    </p>

    <p className='p-5'>

        <Link to={'thirdfloor'}> 
        <p className=''>3rd Floor</p>
        <img src={floor} height={100} width={100}></img>

        </Link>
    </p>

</aside>
  )
}

export default SideBar