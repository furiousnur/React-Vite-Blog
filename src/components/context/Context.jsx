import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer.jsx";

const AppContext = React.createContext();

// const API = "https://thapareactapi.up.railway.app";
const API = "https://dummyjson.com/products";

const initialState = {
    name: "",
    image: "",
    services: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "React Blog",
                image: "../../../public/images/hero.svg"
            },
        });
    };

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "Nur Alam",
                image: "../../../public/images/about1.svg"
            },
        });
    };

    //  to get the api data
    const getServices = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json(); 
            dispatch({ 
                type: "GET_SERVICES",
                payload: data.products
            });
        } catch (error) {
            console.log(error);
        }
    };

    // to call the api
    useEffect(() => {
        getServices(API); 
    }, []);

    return (
        <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
            {children}
        </AppContext.Provider>
    );
};

// global custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };