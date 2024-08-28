import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "../../styles/SingleCard.css"

export const SingleVehicles = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getVehicle(uid);
    }, [actions, uid]);

    return (
        <div className="container">
            <div className="single-box">
                <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                    className="card-img-top-single"
                    alt={`avatar`}
                    onClick={() => navigate(`/${type}/${uid}`)}
                />
                <div className="card-content">
                    <h1 className="text-center">{store.vehicle.name}</h1>
                    <p><strong>Cargo Capacity:</strong> {store.vehicle.cargo_capacity}</p>
                    <p><strong>Consumables:</strong> {store.vehicle.consumables}</p>
                    <p><strong>Cost in Credits:</strong> {store.vehicle.cost_in_credits}</p>
                    <p><strong>Created:</strong> {store.vehicle.created}</p>
                    <p><strong>Crew:</strong> {store.vehicle.crew}</p>
                    <p><strong>Model:</strong> {store.vehicle.model}</p>
                    <p><strong>Manufacturer:</strong> {store.vehicle.manufacturer}</p>
                    <p><strong>Passengers:</strong> {store.vehicle.passengers}</p>
                    <p><strong>Max Atmosphering Speed:</strong> {store.vehicle.max_atmosphering_speed}</p>
                </div>
            </div>
        </div>
    );
};
