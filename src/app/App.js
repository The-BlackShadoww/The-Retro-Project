import { BrowserRouter } from "react-router-dom";
import Routers from "../routes/Routers";
import { Provider } from "react-redux";
import store from "../redux/Store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
