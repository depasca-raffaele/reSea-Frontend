import { createContext, useContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
}
function useAppContext() {

    return useContext(AppContext);
}

export {
    useAppContext,
    AppProvider
};