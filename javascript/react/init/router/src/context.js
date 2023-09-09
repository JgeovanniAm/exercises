import React from 'react'
const PokeContext = React.createContext(null)
export const PokeProvider = PokeContext.Provider;
export const PokeConsumer = PokeContext.Consumer;
export default PokeContext;
