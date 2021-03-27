import React,{useReducer} from 'react';

export default (reducer,actions,initialState) => {
    const Context = React.createContext();

    const Provider = ({children}) =>{
        const [state,dispatch] = useReducer(reducer,initialState);

        return (
            <Context.provider value={{state}}>
                {children}
            </Context.provider>
        );
    }

    return {Context,Provider};
}
