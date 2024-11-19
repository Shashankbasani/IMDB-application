import { createContext } from "react";

const Context = createContext({
    watchList:[],
    setWatchList: ()=>{},
    handleToAddWatchlist : ()=>{},
    deleteFromWatchlist : () => {},
});

export default Context;