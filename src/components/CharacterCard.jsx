import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const CharacterCard = (props) => {
    const navigate = useNavigate()
    return (
        <div className="card mx-2" style={{minWidth: "18rem", background: "white"}}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${props.uid}.jpg`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title black-font">{props.name}</h5>
                    <button
                        className="btn btn-outline-primary details-button"
                        onClick={() => {navigate(`/character/details/${props.uid}`)}}
                    >
                        Learn more
                    </button>
                    <button
                        className="btn btn-outline-danger ms-2"
                        title="Add to favorites"
                        // Agrega aquí la lógica para favoritos si lo deseas
                    >
                        <span role="img" aria-label="favorite">❤️</span>
                    </button>
                </div>
        </div>
    );
}
export default CharacterCard