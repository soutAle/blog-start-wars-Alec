import React, { useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import { useContext } from "react";
import "../../styles/GroupView.css";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getVehicles();
    }, [actions]);

    return (
        <div>
            <h2 className="title">Vehicles</h2>
            <div className="box-card d-flex flex-wrap justify-content-center">
                {store.vehicles.map((vehicle) => (
                    <div key={vehicle.uid}>
                        <Card name={vehicle.name}
                              id={vehicle.uid}
                              type={"vehicles"} />
                    </div>
                ))}
            </div>
        </div>
    );
};


