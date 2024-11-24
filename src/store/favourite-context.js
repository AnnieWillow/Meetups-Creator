import { createContext,useState } from "react";

const FavouriteContext = createContext({
    favourites:[],
    totalFavorites:0,
    addFavourite:(favouriteMeetup) =>{},
    removeFavourite:(meetupId) =>{},
    itemFavourite:(meetupId) =>{}
});

export function FavouriteContextProvider(props){
    const [userFavourites,setUserFavourites]=useState([]);

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites( (prevUserFavourites) =>{
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }
    function removeFavouriteHandler(meetupId){
        setUserFavourites((prevUserFavourites) =>{
            return prevUserFavourites.filter(meetup =>meetup.id !== meetupId);
        });
    }
    function itemFavouriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId);
    }
    const context={
        favourites:userFavourites,
        totalFavorites:userFavourites.length,
        addFavourite:addFavouriteHandler,
        removeFavourite:removeFavouriteHandler,
        itemFavourite:itemFavouriteHandler,
    };
    return(
        <FavouriteContext.Provider value={context}>
            {props.children}
        </FavouriteContext.Provider>
    );

}
 export default FavouriteContext;