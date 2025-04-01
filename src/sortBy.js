

function SortBy(){

    function showText() { 

    }


    return(
    <div className="sortByDropdown">
          <button onClick={showText()} class="dropdown-toggle" type="button" className="sortByButton" > sort by  ↕ </button>
          <div className="dropdownOptions" id="dropdownOptions">
            <a className="dropdown-item" href="/#">Name</a>
            <a className="dropdown-item" href="/#">Popularity</a>
            <a className="dropdown-item" href="/#">Genre</a>
          </div>
        </div>
    );
}

export default SortBy