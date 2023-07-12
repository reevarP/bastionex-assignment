import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HeaderSidebar from "./Components/HeaderSidebar/HeaderSidebar";
import { noHeaderSidebarRoutesArr, routingArray } from "./Services/constants";
import React from "react";

function App() {
    const path = useLocation();

    return (
        <React.Fragment>
            {!noHeaderSidebarRoutesArr.includes(path.pathname) && <HeaderSidebar />}
            <Routes>
                {routingArray.map((curElem) => {
                    return <Route key={curElem.forKey} exact path={curElem.path} element={curElem.element} />;
                })}
            </Routes>
        </React.Fragment>
    );
}

export default App;
