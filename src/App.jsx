import React, { useState, useEffect } from 'react'
import './App.css'

const soundClips = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


function App() {

  const [volume, setVolume] = useState(1)
  const [display, setDisplay] = useState('')

  return (
    <div className="container">
    <div id="drum-machine">
      <h2>Drum Kit</h2>
      <div className="sound-name" id="display">
         <p>{display}</p>
      </div>
      <div className="text-center" id="display">
        {soundClips.map(clip => (
          <Pad className="drum-pad" key={clip.id} clip={clip} volume={volume} setDisplay={setDisplay} />
        ))}
        <br />
        <h4>Volume</h4>
        <input
        type="range"
        step="0.01"
        value={volume}
        max="1"
        min="0"
        className="w-50"
        onChange={(e)=> setVolume(e.target.value)} />
      </div>
    </div>
    </div>
  )
}

function Pad ({clip, volume, setDisplay}) {
  const [active, setActive] = useState(false);
  

 
  useEffect (() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  

  const playSound = () => {
      const audioTag = document.getElementById(clip.keyTrigger)
      setActive(true);
      setTimeout(()=> setActive(false), 200)
      audioTag.currentTime = 0;
      audioTag.volume = volume;
      audioTag.play();
      setDisplay(clip.id)

  }

  return (
    <div 
    className={`btn drum-pad ${active && 'btn-warning'}`}
    id={clip.keyCode}
    onClick={playSound}>
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  )

}

export default App
