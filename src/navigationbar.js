
import { Link } from "react-router-dom";

function Navbar(){
    return(
    <div className="options">
              <Link to="/"> <button className="optionButton">  ⌂ home </button> </Link>
              <Link to="/Search"> <button className="optionButton"> ⌕ search </button></Link>
              <Link to="/RecentlyPlayed"> <button className="optionButton">  ↺ recently played </button> </Link>
              <Link to="/Playlists"> <button className="optionButton"> ▤ playlists </button> </Link>
              <Link to="/LikedSongs"> <button className="optionButton"> ♥ liked songs </button> </Link>
     </div>
    );
}

export default Navbar