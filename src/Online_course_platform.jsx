import Nav from './components/Header/NavBar.jsx';
import Hero from './components/HeroSection.jsx';
import Product from './components/ProductList.jsx';
import Stats from './components/Stats.jsx';
import Phases from './components/Phases.jsx';
function HomePage(){
    return(
        <div>
            <Nav/>
            <Hero/>
            <Product/>
            <Stats/>
            <Phases/>
        </div>
    )
}

export default HomePage;