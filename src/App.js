import React from 'react';
import "./index.css";
import Table from "./components/Table";
import { Provider } from 'react-redux'
import configureStore from "./redux/store";

const reduxStore = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={reduxStore}>
                <Table/>
            </Provider>
        )
    }
}

export default App
