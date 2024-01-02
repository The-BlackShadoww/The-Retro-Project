import { BrowserRouter } from "react-router-dom";
import Routers from "../routes/Routers";
import { Provider } from "react-redux";
import store from "../lib/Redux/Store";
import { extendedApiSlice } from "../lib/Redux/ReduxToolkit/heroSlice";

//* you will get this data immediately at app load time 
// store.dispatch(extendedApiSlice.endpoints.getHeroData.initiate());

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

// ! With ApiProvider
// import { BrowserRouter } from "react-router-dom";
// import Routers from "../routes/Routers";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { apiSlice } from "../lib/Redux/ReduxToolkit/apiSlice";

// function App() {
//     return (
//         <ApiProvider api={apiSlice}>
//             <BrowserRouter>
//                 <Routers />
//             </BrowserRouter>
//         </ApiProvider>
//     );
// }

// export default App;
