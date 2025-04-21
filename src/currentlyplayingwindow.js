
import React, { useState, useEffect } from "react";

const sound = "/songs/QUADECA - GODSTAINED.mp3";

function CurrentlyPlaying(){



    return(
        
        <div className="playingCurrently">
              <button className="previousButton" type="button">⏮</button>
              <button className="playButton" type="button">▶</button>
              <button className="nextButton" type="button">⏭</button>
        </div>
          
    );
}

export default CurrentlyPlaying