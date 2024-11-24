import {useContext} from 'react';
import FavouriteContex from '../store/favourite-context';
import MeetupList
 from '../Components/meetups/MeetupList';
function FavouritesPage(){
   const favouritesCtx= useContext(FavouriteContex);
   
   let content;

   if(favouritesCtx.totalFavorites ===0){
    content= <p>You got no favourties yet.Start adding some?</p>
   }else{
    content= <MeetupList meetups={favouritesCtx.favourites}/>

   }

    return <section>
        <h1>My Favourites</h1>
        {content}
    </section>
}
export default FavouritesPage;