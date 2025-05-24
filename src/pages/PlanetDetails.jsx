import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PlanetDetails = () => {
    const [planet, setPlanet] = useState();
    const { uid } = useParams();
    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then(res => res.json())
            .then(data => setPlanet(data.result.properties))
            .catch(err => console.error(err))
    })
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="main-title">{planet && planet.name}</h1>
            <div className="card" style={{ width: "40rem", backgroundColor: "grey" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${uid}.jpg`} className="card-img-top" alt="..." />
                <div className="car3d-body">
                    <p className="card-text p-2 black-font">
                        Climate: {planet && planet.climate}
                        <br />
                        Diameter: {planet && planet.diameter}
                        <br />
                        Terrain: {planet && planet.terrain}
                        <br />
                        Gravity: {planet && planet.gravity}
                        <br />
                        Population: {planet && planet.population}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default PlanetDetails;