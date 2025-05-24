import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const VehicleDetails = () => {
    const [vehicle, setVehicle] = useState()
    const { uid } = useParams()
    useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles/" + uid)
            .then(res => res.json())
            .then(data => setVehicle(data.result.properties))
            .catch(err => console.error(err))
    })
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="main-title">{vehicle && vehicle.name}</h1>
            <div className="card" style={{ width: "45rem", backgroundColor: "grey" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${uid}.jpg`} className="card-img-top" alt="..." />
                <div className="car3d-body">
                    <p className="card-text p-2 black-font">
                        Model: {vehicle && vehicle.model}
                        <br />
                        Manufacturer: {vehicle && vehicle.manufacturer}
                        <br />
                        Passengers: {vehicle && vehicle.passengers}
                        <br />
                        Max Speed: {vehicle && vehicle.max_atmosphering_speed}
                        <br />
                        Consumables: {vehicle && vehicle.consumables}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default VehicleDetails