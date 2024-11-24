import {Routes,Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './Components/layout/Layout';




function App(){
return <Layout>
  <Routes>
    <Route path='/' element={<AllMeetupsPage/>} ></Route>
    <Route path='/favourites' element={<FavouritesPage/>} ></Route>
    <Route path='/new-meetup' element={<NewMeetupPage/>} ></Route>
  </Routes>


  
</Layout>
}
export default App;