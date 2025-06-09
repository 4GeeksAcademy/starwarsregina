import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const VehicleCard = (props) => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate()

    const addFavorite = (vehicle) => {
        // Check if the vehicle is already in favorites
        const isFavorite = store.favorites.vehicles.some(fav => fav.uid === vehicle.uid);
        if (!isFavorite) {
            dispatch({
                type: "set_favorites",
                payload: { favorites: {...store.favorites, vehicles: [...store.favorites.vehicles, vehicle]} }
            });
        } else {
            dispatch({
                type: "set_favorites",
                payload: { favorites: {...store.favorites, vehicles: store.favorites.vehicles.filter(fav => fav.uid !== vehicle.uid)} }
            });
        }
    }
    const isFavorite = () => {
        return store.favorites.vehicles.some(fav => fav.uid === props.uid);
    }
    return (
        <div className="card mx-2" style={{ minWidth: "18rem", background: "white" }}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${props.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title black-font">{props.name}</h5>
                <button
                    className="btn btn-outline-primary details-button"
                    onClick={() => { navigate(`/vehicle/details/${props.uid}`) }}
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
    );
}
export default VehicleCard