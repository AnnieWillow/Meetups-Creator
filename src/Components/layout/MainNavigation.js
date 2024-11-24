import {useContext} from 'react';
import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavouriteContext from '../../store/favourite-context';

function MainNavigation(){
    const favouritesCtx = useContext(FavouriteContext);
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetup</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favourites'>My Favourite
                    <span className={classes.badge}>
                        {favouritesCtx.totalFavorites}
                    </span>

                    </Link>

                </li>
            </ul>
        </nav>
    </header>

    
}
export default MainNavigation;