import "./Home.css"
import Navbar from "./navigationbar";
import CurrentlyPlaying from "./currentlyplayingwindow";
import SortBy from "./sortBy";
import ScrollSongs from "./songScroll";
import modeSwitch from "./lightdarkModeSwitch";
import SineWave from "./sinewave";


function Home() {
  return (
    <div className="entirePageContainer">
      <div className="secondaryPageContainer">
        <div className="headers">
          <div>
            <h1 className="logo">waveform</h1> 
            
          </div>
          <SineWave/>
        </div>
        {/*sortBy Dropdown Menu*/}
        < SortBy />
        < modeSwitch />
        <div className="contentflexbox">
        
          <div className="sideBoxes"> {/* div to define the 2 boxes on the left*/}
            {/*navigationbar*/}
            < Navbar />
            {/*display currently playing song*/}
            
            < CurrentlyPlaying />
          </div>

    
          {/*scroll songs*/}
          <div className="songScroll">
            <h2 className="title">home</h2>
       
              <ScrollSongs/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
