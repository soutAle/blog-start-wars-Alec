import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./views/Characters.jsx";
import { Planets } from "./views/Planets.jsx";
import { SingleCharacters } from "./views/SingleCharacters.jsx";
import { Vehicles } from "./views/Vehicles.jsx";
import { SinglePlanets } from "./views/SinglePlanets.jsx";
import { SingleVehicles } from "./views/SingleVehicles.jsx";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/characters/:uid" element={<SingleCharacters />} />
                        <Route path="/planets" element={<Planets />} />
                        <Route path="/planets/:uid" element={<SinglePlanets />} />
                        <Route path="/vehicles" element={<Vehicles />} />
                        <Route path="/vehicles/:uid" element={<SingleVehicles />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
