import { Children, createContext } from "react";

export const Component = createContext()

//retornamos un componente que viene a partir del contexto
export const GlobalProvider = ({children}) => {
    return(
        <Context.Provider>
            {Children}
        </Context.Provider>
    )
}