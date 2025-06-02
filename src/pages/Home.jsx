import { useEffect } from "react";
import CharacterCard from "../components/CharacterCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PlanetCard from "../components/PlanetCard.jsx";
import VehicleCard from "../components/VehicleCard.jsx";

export const Home = () => {

  const {store, dispatch} = useGlobalReducer()

  async function getCharacters() {
	const response = await fetch("https://swapi.tech/api/people")

	if(response.ok){
		const data = await response.json()
		dispatch({
				type: "set_characters",
				payload: {characters: data.results}
			})
	}
    }

  async function getPlanets() {
	const response = await fetch("https://swapi.tech/api/planets")

	if(response.ok){
		const data = await response.json()
		dispatch({
			type: "set_planets",
			payload: {planets: data.results}
		})
	}
    }

  async function getVehicles() {
	const response = await fetch("https://www.swapi.tech/api/vehicles")

	if(response.ok){
		const data = await response.json()
		dispatch({
			type: "set_vehicles",
			payload: {vehicles: data.results}
		})
	}
    }

	useEffect(() => {
		getCharacters()
		getPlanets()
		getVehicles()
	}, [])

	return (
        <div className="text-center mt-5">
            <div className="container mt-2">
                <h2 className="main-title" style={{ color: "red" }}>Characters</h2>
                <hr/>
            </div>
            <div className="container py-2 overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {store.characters && store.characters.length > 0 && store.characters.map(character => <CharacterCard name={character.name} key={character.uid} uid={character.uid}/> )}
                </div>
            </div>
            <div className="container mt-2">
                <h2 className="main-title" style={{ color: "red" }}>Planets</h2>
                <hr/>
            </div>
            <div className="container py-2 overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {store.planets && store.planets.length > 0 && store.planets.map(planet => <PlanetCard name={planet.name} key={planet.uid} uid={planet.uid}/> )}
                </div>
            </div>
            <div className="container mt-2">
                <h2 className="main-title" style={{ color: "red" }}>Vehicles</h2>
                <hr/>
            </div>
            <div className="container py-2 overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {store.vehicles && store.vehicles.length > 0 && store.vehicles.map(vehicle => <VehicleCard name={vehicle.name} key={vehicle.uid} uid={vehicle.uid}/> )}
                </div>
            </div>
        </div>
	);
};