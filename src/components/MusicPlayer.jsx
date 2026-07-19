import { useRef, useState } from "react";
import { FiMusic, FiPlay, FiPause } from "react-icons/fi";
import "../styles/MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Music could not play:", error);
          setIsPlaying(false);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/girlie.mp3"
        loop
      />

      <div className="music-player">
        <div className="music-player-icon">
          <FiMusic />
        </div>

        <div className="music-player-info">
          <span className="music-label">Now Playing</span>
          <span className="music-title">Kashaf's Vibe</span>
        </div>

        <button
          className="music-toggle"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <FiPause /> : <FiPlay />}
        </button>
      </div>
    </>
  );
}

export default MusicPlayer;