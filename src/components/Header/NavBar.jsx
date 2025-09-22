// import './components/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'


function Nav() {
    const navigate=useNavigate();
    const location=useLocation();

    const navigation=(e)=>{
        navigate(e.target.value)
    }
    return (
        <nav className=" nav w-full h-15 flex font flex-row items-center justify-between">
            <div className="left flex flex-row items-center  w-left outline-amber-600 justify-evenly">
                <div className='font-bold'>
                    <NavLink to="">
                        <img src="assets/skillifylogo.png" alt="Logo" className="h-8 w-15" />
                    </NavLink>
                </div>
                <div className='search flex flex-row text-greeny'>
                    <input type="text" name="Search" placeholder='Search' className='searchbox' />
                    <FontAwesomeIcon className="hover:text-red-700" icon={faSearch} />
                </div>
            </div>
            <div className="right flex flex-row items-center justify-between w-right outline-amber-600">
                <div>
                    <select name="Browse" onChange={navigation} value={
                        location.pathname==="/all-courses"
                        ? "/all-courses":"/categories"
                    }> 
                            <option defaultValue="Browse" selected disabled hidden>Browse</option>
                        
                        <option value="/all-courses">Popular Courses</option>
                        
                        
                        <option value="/categories">Categories</option>
                        
                    </select>

                </div>
                <div>
                    <NavLink to="/plan">
                        Plan & pricing</NavLink>
                </div>
                <div>
                    <NavLink to="/about">
                        About</NavLink>
                </div>
                <div>
                    <NavLink to="/contact">
                        Contact</NavLink>
                </div>
                <div className='gap-5 flex items-center'>
                    <Link to="#">
                        <button className='btn-secondary'>Log-In</button>
                    </Link>
                    <Link to="#">
                        <button className='btn-primary'>Sign-Up</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;