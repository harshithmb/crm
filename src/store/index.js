import { createStore } from "redux";
import { contactReducer } from "../reducers/contactReducer";

const ConfigureStore = () => {
    const store = createStore(contactReducer)
    return (store);
}

export default ConfigureStore;