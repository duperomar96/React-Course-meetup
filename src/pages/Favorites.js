import {useContext} from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';
function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>Wanna add some favorites?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }

    return <section>
        <h1>My favourite Meetups</h1>
        {content}
    </section>
}

export default FavoritesPage;