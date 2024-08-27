import React, { useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import { useContext } from "react";
import "../../styles/GroupView.css";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets();
    }, [actions]);

    return (
        <div>
            <div className="box-card d-flex flex-wrap justify-content-center">
            <h2 className="title">Planets</h2>
                {store.planets.map((planet) => (
                    <div key={planet.uid}>
                        <Card name={planet.name}
                              id={planet.uid}
                              type={"planets"} />
                    </div>
                ))}
            </div>
        </div>
    );
};
