import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const PlanetCard = (props) => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate() 

    const addFavorite = (planet) => {
        // Check if the planet is already in favorites
        const isFavorite = store.favorites.planets.some(fav => fav.uid === planet.uid);
        if (!isFavorite) {
            dispatch({
                type: "set_favorites",
                payload: { favorites: {...store.favorites, planets: [...store.favorites.planets, planet]} }
            });
        } else {
            dispatch({
                type: "set_favorites",
                payload: { favorites: {...store.favorites, planets: store.favorites.planets.filter(fav => fav.uid !== planet.uid)} }
            });
        }
    }
    const isFavorite = () => {
        return store.favorites.planets.some(fav => fav.uid === props.uid);
    }
    return (
        <div className="card mx-2" style={{ minWidth: "18rem", background: "white" }}>
            <img src={`https://cdn.jsdelivr.net/gh/breatheco-de/swapi-images/public/images/planets/${props.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title black-font">{props.name}</h5>
                <button
                    className="btn btn-outline-primary details-button"
                    onClick={() => { navigate(`/planet/details/${props.uid}`) }}
                >
                    Learn more
                </button>
                <button
                    className="btn btn-outline-danger ms-2"
                    title="Add to favorites"
                    // Agrega aquí la lógica para favoritos si lo deseas
                >
                 <span role="img" aria-label="favorite" onClick={()=> addFavorite(props)}><i className={isFavorite() ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart"}></i></span>
                </button>
            </div>
        </div>
    )
}
export default PlanetCard