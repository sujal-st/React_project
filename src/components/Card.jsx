function Card(props) {
    return (
        <div className="flex flex-col rounded overflow-hidden shadow-lg pb-1.5 card">
            <img className="img-card" src={props.img} alt="Sunset in the mountains" />
            <div className="px-6 py-4 flex flex-col">
                <div className="font-semibold mb-2 card-heading">{props.title}</div>
                <div className="instructor">{props.instructor}</div>
                <div className="rating">{props.review}</div>
                {/* <p className="text-gray-700 text-base card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate aspernatur delectus velit beatae iste iusto nemo neque cumque et asperiores a officiis qui quis est quidem sapiente rem, dignissimos laudantium!
                </p> */}
            </div>
            <div className="px-6 card-tag">
                <span className="inline-block px-3 py-1 mr-2 mb-2">{props.category}</span>
            </div>
            <div className="px-6 price">{props.price}</div>
            <div className="px-6 py-2">

                <button className="btn-primary">Enroll Now</button>
            </div>
        </div>
    )
}

export default Card;