import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css";

export const ListCards = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
        actions.getPlanets();
        actions.getVehicles();
    }, [actions]);

    return (
        <>
            <div className="container my-4">
                <h2 className="title text-center fw-bold text-muted">Characters</h2>
                <div className="list-card d-flex">
                    {store.characters.map((character) => (
                        <div key={character.uid}>
                            <Card name={character.name}
                                id={character.uid}
                                type={"characters"} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mt-4">
                <h2 className="title fw-bold text-muted text-center">Planets</h2>
                <div className="list-card d-flex flex-nowrap">
                    {store.planets.map((planet) => (
                        <div key={planet.uid}>
                            <Card name={planet.name}
                                id={planet.uid}
                                type={"planets"} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container  mt-4">
                <h2 className="title fw-bold text-muted text-center">Vehicles</h2>
                <div className="list-card d-flex flex-nowrap">
                    {store.vehicles.map((vehicle) => (
                        <div key={vehicle.uid}>
                            <Card name={vehicle.name}
                                id={vehicle.uid}
                                type={"vehicles"} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
