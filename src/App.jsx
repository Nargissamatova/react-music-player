import { useState } from "react";
import "./App.css";
import sinister from "./assets/sinister.mp3";
import stomping from "./assets/stomp.mp3";
import underwater from "./assets/underwater.mp3";
import { PlayerControls } from "./components/PlayerControls";
import { TrackList } from "./components/TrackList";
import { MusicContext } from "./contexts/MusicContext";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    currentTrackIndex: 0,
    isPlaying: false,
    tracks: [
      {
        name: "Sinister Music ...",
        file: sinister,
      },
      {
        name: "Stomp - Stomping!!!",
        file: stomping,
      },
      {
        name: "Underwater ... bubbles",
        file: underwater,
      },
    ],
  });

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div>
        <TrackList />
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
