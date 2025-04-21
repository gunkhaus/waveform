function SortBy() {
  function showText() {
    const sortByDropdown = document.querySelector(".sortByDropdown");
    sortByDropdown.classList.toggle("open");
  }

  return (
    <div className="sortByDropdown">
      <button onClick={showText} className="dropdown-toggle" type="button">sort by  ↕</button>
      <div className="dropdownOptions" id="dropdownOptions">
        <a className="dropdown-item" href="/#">Name</a>
        <a className="dropdown-item" href="/#">Popularity</a>
        <a className="dropdown-item" href="/#">Genre</a>
      </div>
    </div>
  );
}

export default SortBy;
