import { useEffect, useState } from "react";

function ScrollSongs() {
    const [songs, setSongs] = useState([]);
    const [activeSongId, setActiveSongId] = useState(null); // Track the active song ID

    useEffect(() => {
        fetch("/songs.json")
            .then(response => response.json())
            .then(data => setSongs(data))
            .catch(error => console.error("Error fetching songs:", error));
    }, []);

    function handleButtonClick(id) {
        // Set the clicked song's ID as active (only one active song at a time)
        setActiveSongId(id);
    }

    return (
        <div>
            <h1>browse all songs</h1>
            <ul className="songScrollContainer">
                {songs.map(song => (
                    <li key={song.id}>
                        <button
                            onClick={() => handleButtonClick(song.id)}
                            className={`songScrollButtons ${activeSongId === song.id ? "active" : ""}`}
                        >
                            <div className="songImg">
                                <img
                                    className="coverArtImage"
                                    src={`/coverart/${song.cover}`}
                                    alt={`${song.title} cover`}
                                />
                            </div>
                            <div className="songInfo">
                                <div className="songTitle">{song.title}</div>
                                <div className="songArtist">{song.artist}</div>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ScrollSongs;

