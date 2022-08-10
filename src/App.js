import Home from "./page/home/Home";
import {
    BrowserRouter,
    Routes,
    Route, Link,
} from "react-router-dom";
import './App.scss'
function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={'/'}>
                <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
