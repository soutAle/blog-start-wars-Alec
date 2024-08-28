import React, { useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import { useContext } from "react";
import "../../styles/GroupView.css";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
    }, [actions]);

    return (
        <div>
            <h2 className="title">Characters</h2>
            <div className="box-card d-flex flex-wrap justify-content-center">
                {store.characters.map((character) => (
                    <div key={character.uid} >
                        <Card name={character.name}
                              id={character.uid}
                              type={"characters"}
                         />
                    </div>
                ))}
            </div>
        </div>
    );
};
