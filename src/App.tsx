import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import "./styles/index.scss";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageLazy/>}/>
                    <Route path={"/about"} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;