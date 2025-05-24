import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CharacterDetails = () => {
    const [character, setCharacter] = useState()
    const { uid } = useParams()
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className="d-flex flex-column align-items-center">
                <h1 className="main-title">{character && character.name}</h1>
                <div className="card" style={{ width: "30rem", backgroundColor: "grey" }}>
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${uid}.jpg`} className="card-img-top" alt="..." />
                    <div className="car3d-body">
                        <p className="card-text p-2 black-font">
                            Gender: {character && character.gender}
                            <br/>
                            Birth Year: {character && character.birth_year}
                            <br/>
                            Height: {character && character.height}
                            <br/>
                            Eye Color: {character && character.eye_color}
                            <br/>
                            Hair Color: {character && character.hair_color}
                        </p>
                    </div>
                </div>
        </div>
    )
}
export default CharacterDetails;