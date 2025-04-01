import "./Home.css"
import Navbar from "./navigationbar";
import CurrentlyPlaying from "./currentlyplayingwindow";
import SortBy from "./sortBy";

function Home() {
  return (
    <div className="entirePageContainer">
      <div className="secondaryPageContainer">
        <h1>waveform</h1> 
        
        {/*sortBy Dropdown Menu*/}
        < SortBy />

        <div className="contentflexbox">
          
          <div className="sideBoxes"> {/* div to define the 2 boxes on the left*/}
            {/*navigationbar*/}
            < Navbar />
            

            {/*display currently playing song*/}
            < CurrentlyPlaying />

          </div>

          {/*scroll songs*/}
          <div className="songScroll">
            <h2>home</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
