
import { useState } from "react"; 
import SortBy from "./sortBy";
import Navbar from "./navigationbar";
import CurrentlyPlaying from "./currentlyplayingwindow";


function Search() {
    //use state for searching songs
    const [content, setContent] = useState("");

    function searchSong(){
        
        //search bar functionality
    }


    return (
        <div className="entirePageContainer">
          <div className="secondaryPageContainer">
            <h1>waveform</h1> 
    
            {/*sortBy Dropdown Menu*/}
            < SortBy />
    
            <div className="contentflexbox">
              
              <div className="sideBoxes"> {/* div to define the 2 boxes on the left*/}
                {/*navbar*/}
                < Navbar />
    
                {/*display currently playing song*/}
                <CurrentlyPlaying />
              </div>
    
              {/*scroll songs*/}
              <div className="songScroll" id="songScrollSEARCHBAR">
                <h2 id = "searchBar">search
                
                <textarea type="text" value={content} class="contentBox" placeholder="⌕"
                    onChange={(event)=>setContent(event.target.value)} />
                    
                    </h2>

                    
                
              </div>
            </div>
          </div>
        </div>
      );

}

export default Search;