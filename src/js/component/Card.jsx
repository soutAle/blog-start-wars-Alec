import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/Card.css"

export const Card = ({ name, id: uid, type }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const isFavorite = store.favorites.some(fav => fav.id === uid);

    const handleFavoriteClick = () => {
        const item = { name, id: uid, type };
        if (!isFavorite) {
            actions.addFavorite(item);
        } else {
            actions.removeFavorite(uid);
        }
    };

    return (
        <div className="card" style={{ width: "18rem", margin: "40px" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`}
                className="card-img-top"
                alt={`${name}'s avatar`}
                onClick={() => navigate(`/${type}/${uid}`)}
                style={{ cursor: 'pointer' }}
            />
            <h5 className="card-title text-center">{name}</h5>
            <div className="card-body text-center">
                <div className=" card-button-box d-flex justify-content-between">
                    <button onClick={() => navigate(`/${type}/${uid}`)} className="btn btn-learn">
                        Learn more
                    </button>
                    <button
                        className="btn btn-danger btn-likes"
                        onClick={handleFavoriteClick}>
                        <i className={`fa-solid fa-heart`} style={{ color: isFavorite ? 'red' : 'gray' }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
