import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer(); 
	const navigate = useNavigate();

	const deleteFavorite = (type, uid) => {
		dispatch({
			type: "set_favorites",
			payload: {
				favorites: {
					...store.favorites,
					[type]: store.favorites[type].filter((item) => item.uid !== uid)
				}
			}
		});
		
	}
	return (
		<nav className="navbar navbar-grey">
			<div className="container">
				<h3 className="black-font">Star Wars</h3>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn details-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							My Favorites <i class="fa-solid fa-arrow-down"></i>
						</button>
						<ul class="dropdown-menu dropdown-favorites" onClick={(e) => e.stopPropagation()}>
							{store.favorites.characters.length > 0 && (
								<li className="dropdown-item dropdown-item-favorites black-font">
									Characters
									<ul>
										{store.favorites.characters.map((character) => (
											<li key={character.uid} className="black-font d-flex justify-content-between">
												<span role="button" onClick={()=> navigate(`/character/details/${character.uid}`)}>{character.name}</span>
												<button
													className="btn btn-outline-danger btn-sm"
													onClick={() => deleteFavorite('characters', character.uid)}
													title="Remove from favorites"
												>
													<i className="fa-solid fa-trash"></i>
												</button>
												
											</li>
										))}
									</ul>
								</li>
							)}
							{store.favorites.planets.length > 0 && (
								<li className="dropdown-item dropdown-item-favorites black-font">
									Planets
									<ul>
										{store.favorites.planets.map((planet) => (
											<li key={planet.uid} className="black-font d-flex justify-content-between">
												<span role="button" onClick={()=> navigate(`/planet/details/${planet.uid}`)}>{planet.name}</span>
												<button
													className="btn btn-outline-danger btn-sm"
													onClick={() => deleteFavorite('planets', planet.uid)}
													title="Remove from favorites"
												>
													<i className="fa-solid fa-trash"></i>
												</button>
												
											</li>
										))}
									</ul>
								</li>
							)}
							{store.favorites.vehicles.length > 0 && (
								<li className="dropdown-item dropdown-item-favorites black-font">
									Vehicles
									<ul>
										{store.favorites.vehicles.map((vehicle) => (
											<li key={vehicle.uid} className="black-font d-flex justify-content-between">
												<span role="button" onClick={()=> navigate(`/vehicle/details/${vehicle.uid}`)}>{vehicle.name}</span>
												<button
													className="btn btn-outline-danger btn-sm"
													onClick={() => deleteFavorite('vehicles', vehicle.uid)}
													title="Remove from favorites"
												>
													<i className="fa-solid fa-trash"></i>
												</button>
												
											</li>
										))}
									</ul>
								</li>
							)}
							
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};