const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {  
			characters: [],
			planets: [],
			vehicles: [],
			char: [],
			planet: [],
			vehicle: [],
			favorites: []
		},

		actions: {  
			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/");
					const data = await response.json();
					if (data) {
						setStore({ characters: data.results });
						console.log(data);
					}
				} catch (error) {
					console.log("ha habido un error: " + error);
				}
			},

			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/");
					const data = await response.json();
					if (data) {
						setStore({ planets: data.results });
						console.log(data);
					}
				} catch (error) {
					console.log("ha habido un error: " + error);
				}
			},

			getVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/");
					const data = await response.json();
					if (data) {
						setStore({ vehicles: data.results });
						console.log(data);
					}
				} catch (error) {
					console.log("ha habido un error: " + error);
				}
			},

			getChar: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					const data = await response.json();
					if (data) {
						setStore({ char: data.result.properties });
						console.log(data);
					}
				} catch (error) {
					console.log("ha habido un error: " + error);
				}
			},

			getPlanet: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
					const data = await response.json();
					if (data) {
						setStore({ planet: data.result.properties });
						console.log(data);
					}
				} catch (error) {
					console.log("ha habido un error: " + error);
				}
			},

			getVehicle: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
					const data = await response.json();
					if (data) {
						setStore({ vehicle: data.result.properties });
						console.log(data);
					}
				} catch (error) {
					console.log("ha habido un error: " + error);
				}
			},

			addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.id === item.id)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

            removeFavorite: (id) => {
				const store = getStore();
				setStore({
					favorites: store.favorites.filter(fav => fav.id !== id)
				});
			}
			
		}
	}
};

export default getState;
