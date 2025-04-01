import "./Home.css"
import SortBy from "./sortBy";
import Navbar from "./navigationbar";
import CurrentlyPlaying from "./currentlyplayingwindow";

function RecentlyPlayed() {
    return (
        <div className="entirePageContainer">
          <div className="secondaryPageContainer">
            <h1>waveform</h1> 
    
            {/*sortBy Dropdown Menu*/}
            <SortBy />
    
            <div className="contentflexbox">
              
              <div className="sideBoxes"> {/* div to define the 2 boxes on the left*/}
                {/*navbar*/}
                <Navbar />
    
                {/*display currently playing song*/}
                <CurrentlyPlaying />
              </div>
    
              {/*scroll songs*/}
              <div className="songScroll">
                <h2>recently played</h2>
              </div>
            </div>
          </div>
        </div>
      );
}

export default RecentlyPlayed;