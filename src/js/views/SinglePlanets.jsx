import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "../../styles/SingleCard.css"

export const SinglePlanets = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getPlanet(uid);
    }, [actions, uid]);

    return (
        <div className="container">
            <div className="single-box">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                    className="card-img-top-single"
                    alt={`avatar`}
                    onClick={() => navigate(`/${type}/${uid}`)}
                />
                <div className="card-content">
                    <h1 className="text-center">{store.planet.name}</h1>
                    <p><strong>Climate:</strong> {store.planet.climate}</p>
                    <p><strong>Diameter:</strong> {store.planet.diameter}</p>
                    <p><strong>Gravity:</strong> {store.planet.gravity}</p>
                    <p><strong>Terrain:</strong> {store.planet.terrain}</p>
                    <p><strong>Population:</strong> {store.planet.population}</p>
                </div>
            </div>
        </div>
    );
};
