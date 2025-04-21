function SortBy() {
  function showText() {
    const sortByDropdown = document.querySelector(".sortByDropdown");
    sortByDropdown.classList.toggle("open");
  }

  return (
    <div className="sortByDropdown">
      <button onClick={showText} className="sortByMainButton" type="button"> sort by </button>
      <div className="dropdownOptions" id="dropdownOptions">
        <p className="sortByArrow" >→</p>
        <a className="sortByButton" href="/#">Name</a>
        <a className="sortByButton" href="/#">Popularity</a>
        <a className="sortByButton" href="/#">Genre</a>
      </div>
    </div>
  );
}

export default SortBy;
