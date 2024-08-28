import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
        actions.getPlanets();
        actions.getVehicles();
    }, [actions]);

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    return (
        <>
            <div className="container mt-4">
                <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#favoritesModal"
                >
                    Favorites
                </button>

                <div id="charactersCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <h2 className="text-center color-white title">Characters</h2>
                        {chunkArray(store.characters, 3).map((characterChunk, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div className="row">
                                    {characterChunk.map(character => (
                                        <div key={character.uid} className="col-md-4 d-flex justify-content-center">
                                            <Card name={character.name} id={character.uid} type={"characters"} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#charactersCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#charactersCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div id="planetsCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <h2 className="text-center color-white title">Planets</h2>
                        {chunkArray(store.planets, 3).map((planetChunk, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div className="row">
                                    {planetChunk.map(planet => (
                                        <div key={planet.uid} className="col-md-4 d-flex justify-content-center">
                                            <Card name={planet.name} id={planet.uid} type={"planets"} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#planetsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#planetsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div id="vehiclesCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <h2 className="text-center color-white title">Vehicles</h2>
                        {chunkArray(store.vehicles, 3).map((vehicleChunk, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div className="row">
                                    {vehicleChunk.map(vehicle => (
                                        <div key={vehicle.uid} className="col-md-4 d-flex justify-content-center">
                                            <Card name={vehicle.name} id={vehicle.uid} type={"vehicles"} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#vehiclesCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#vehiclesCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="favoritesModal" tabIndex="-1" aria-labelledby="favoritesModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="favoritesModalLabel">Favorites</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {store.favorites.length === 0 ? (
                                <p>Add favorites to the list</p>
                            ) : (
                                <ul className="list-group">
                                    {store.favorites.map((favorite) => (
                                        <li key={favorite.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <a 
                                                href="#" 
                                                onClick={() => navigate(`/${favorite.type}/${favorite.id}`)}
                                            >
                                                {favorite.name}
                                            </a>
                                            <button 
                                                className="btn btn-outline-danger btn-sm" 
                                                onClick={() => actions.removeFavorite(favorite.id)}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
