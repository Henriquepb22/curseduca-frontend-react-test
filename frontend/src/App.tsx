import React from "react";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Form from "./components/Form";

import store from "./store/rootStore";

function App(): JSX.Element {
    return (
        <div>
            <Provider store={store}>
                <Header />
                <Form />
            </Provider>
        </div>
    );
}

export default App;
