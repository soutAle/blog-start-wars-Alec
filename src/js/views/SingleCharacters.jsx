import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "../../styles/SingleCard.css"

export const SingleCharacters = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getChar(uid);
    }, [actions, uid]);

    return (
        <div className="container text-center">
            <div className="single-box">
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                    className="card-img-top-single"
                    alt={`avatar`}
                />
                <div className="card-content">
                    <h1>{store.char.name}</h1>
                    <p><strong>Birth Year:</strong> {store.char.birth_year}</p>
                    <p><strong>Eye Color:</strong> {store.char.eye_color}</p>
                    <p><strong>Gender:</strong> {store.char.gender}</p>
                    <p><strong>Hair Color:</strong> {store.char.hair_color}</p>
                    <p><strong>Height:</strong> {store.char.height} cm</p>
                    <p><strong>Mass:</strong> {store.char.mass} kg</p>
                    <p><strong>Skin Color:</strong> {store.char.skin_color}</p>
                </div>
            </div>
        </div>
    );
};


