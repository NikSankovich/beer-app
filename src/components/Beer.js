function Beer(props) {
    console.log(props)

    return( 
        <li className="beer-info">
            <img src={props.beer.image_url} alt={props.beer.name} />
            <h4>{props.beer.name}</h4>
            <br/>
            <p>{props.beer.tagline}</p>
            <br/>
            <p>{props.beer.food_pairing}</p>
            <br/>
            <p>{props.beer.method.twist}</p>
        </li>
    )
}

export default Beer;