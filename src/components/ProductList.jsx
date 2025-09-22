// import './components/nav.css'
import Card from './Card.jsx'

function Product() {
    return (
        <div className='card-section'>
            <div className='flex flex-row justify-between'>
            <h2 className='section-title'>Popular courses</h2>
            <button className="btn-secondary">View More</button>

            </div>

            <div className='flex flex-row items-center card-frame'>

                
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
                
                


            </div>
        </div>
    )
}
export default Product