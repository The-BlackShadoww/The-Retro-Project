import { BrowserRouter } from "react-router-dom";
import Routers from "../routes/Routers";
import { Provider } from "react-redux";
import store from "../lib/Redux/Store";

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
